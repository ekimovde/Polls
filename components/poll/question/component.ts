import { Component, mixins } from 'nuxt-property-decorator';
import { Tooltip } from 'element-ui';
import Draggable from 'vuedraggable';
import { COMPONENT_NAME, PollQuestionTextAttribute, PollQuestionTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { PollQuestionCounter } from '~/components/poll/question/counter';
import { uiButton, uiInput, uiModal } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { PollQuestionType } from '~/components/poll/question/type';
import { pollQuestionTypeOption, pollQuestionTypeOptions } from '~/static-data/poll/question-type/factory';
import { UiInputView, UiInputSize } from '~/components/ui/input/component';
import { PollQuestionResponse, PollQuestionTypes, PollQuestionAnswer } from '../model';
import { PollAnswer } from '~/components/poll/answer';
import { PollQuestionFooter } from '~/components/poll/question/footer';
import { PollQuestionMenu } from '~/components/poll/question/menu';
import { PollQuestionMenuView } from './menu/component';
import { PollQuestionHelp } from '~/components/poll/question/help';
import { fakePollAnswer, fakePollAnswerByImage, fakePollAnswerByImageText, fakePollAnswerByEmoji } from '~/shared/repository/fixtures/fake-poll-answers';
import { generateUnixTimestamp } from '~/shared/utils/generate-timestamp';
import { PollQuestionFooterView } from './footer/component';

@Component({
  name: COMPONENT_NAME,
  components: {
    ElTooltip: Tooltip,
    PollQuestionCounter,
    PollQuestionFooter,
    PollQuestionType,
    PollQuestionMenu,
    PollQuestionHelp,
    PollAnswer,
    Draggable,
    uiButton,
    uiInput,
    uiModal
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = PollQuestionTextAttribute;
  readonly testLocators = PollQuestionTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly uiInputView = UiInputView;
  readonly uiInputSize = UiInputSize;

  readonly pollQuestionMenuView = PollQuestionMenuView;

  readonly pollQuestionFooterView = PollQuestionFooterView;

  readonly pollQuestionTypeOption = pollQuestionTypeOption();
  readonly pollQuestionTypeOptions = pollQuestionTypeOptions();

  question: PollQuestionResponse = {
    name: '',
    type: PollQuestionTypes.text,
    answers: [],
    settings: {
      isMultipleAnswers: false
    }
  }

  isVisible = false;

  isQuestionHidden = false;

  get quantityOfAnswers(): number {
    return this.question.answers.length;
  }

  get hasAnswers(): boolean {
    return Boolean(this.quantityOfAnswers);
  }

  openModal(): void {
    if (this.isQuestionHidden) {
      return;
    }

    this.isVisible = true;
  }

  addAnswer(): void {
    const timestamp = generateUnixTimestamp();

    switch (this.question.type) {
      case PollQuestionTypes.image:
        this.question.answers.push({ ...fakePollAnswerByImage({ timestamp }) });
        break;
      case PollQuestionTypes.imageText:
        this.question.answers.push({ ...fakePollAnswerByImageText({ timestamp }) });
        break;
      case PollQuestionTypes.emoji:
        this.question.answers.push({ ...fakePollAnswerByEmoji({ timestamp }) });
        break;
      default:
        this.question.answers.push({ ...fakePollAnswer({ timestamp }) });
    }
  }

  updateQuestionType(type: PollQuestionTypes): void {
    this.question.type = type;
  }

  updateQuestion(type: PollQuestionTypes): void {
    this.isVisible = false;

    if (!this.hasAnswers) {
      this.updateQuestionType(type);
      this.addAnswer();

      return;
    }

    if (type === this.question.type) {
      return;
    }

    const imageTypes = [PollQuestionTypes.image, PollQuestionTypes.imageText];

    const isImageType = imageTypes.includes(type);
    const isEmojiType = type === PollQuestionTypes.emoji;

    let answers = [...this.question.answers];

    answers = answers.map(item => ({
      type,
      timestamp: item.timestamp,
      text: item.text,
      image: isImageType ? item.image : null,
      emoji: isEmojiType ? item.emoji : null
    }));

    this.updateQuestionType(type);
    this.question.answers = [...answers];
  }

  updateAnswer(index: number, answer: PollQuestionAnswer): void {
    this.question.answers[index] = { ...answer };
  }

  removePoll(index: number): void {
    this.question.answers.splice(index, 1);
  }

  clearQuestion(): void {
    this.isQuestionHidden = false;
    this.question = {
      name: '',
      type: PollQuestionTypes.text,
      answers: [],
      settings: {
        isMultipleAnswers: false
      }
    };
  }
}
