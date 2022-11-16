import { Component, mixins, Prop, Watch } from 'nuxt-property-decorator';
import { Tooltip } from 'element-ui';
import Draggable from 'vuedraggable';
import { isEmpty } from 'lodash';
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
import { fakePollQuestion } from '~/shared/repository/fixtures/fake-poll-question';

enum PollQuestionEvent {
  updateQuestion = 'update:question'
}

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
  @Prop({
    type: Object,
    required: true
  }) readonly question: PollQuestionResponse;

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

  tempQuestion: PollQuestionResponse = { ...fakePollQuestion() };

  isVisible = false;
  isQuestionHidden = false;

  get quantityOfAnswers(): number {
    return this.tempQuestion.answers.length;
  }

  get hasQuestion(): boolean {
    return !isEmpty(this.question);
  }

  get hasAnswers(): boolean {
    return Boolean(this.quantityOfAnswers);
  }

  created(): void {
    void this.updateTempQuestion();
  }

  openModal(): void {
    if (this.isQuestionHidden) {
      return;
    }

    this.isVisible = true;
  }

  addAnswer(): void {
    const timestamp = generateUnixTimestamp();

    switch (this.tempQuestion.type) {
      case PollQuestionTypes.image:
        this.tempQuestion.answers.push({ ...fakePollAnswerByImage({ timestamp }) });
        break;
      case PollQuestionTypes.imageText:
        this.tempQuestion.answers.push({ ...fakePollAnswerByImageText({ timestamp }) });
        break;
      case PollQuestionTypes.emoji:
        this.tempQuestion.answers.push({ ...fakePollAnswerByEmoji({ timestamp }) });
        break;
      default:
        this.tempQuestion.answers.push({ ...fakePollAnswer({ timestamp }) });
    }
  }

  updateTempQuestion(): void {
    if (!this.hasQuestion) {
      return;
    }

    this.tempQuestion = { ...this.question };
  }

  updateQuestionType(type: PollQuestionTypes): void {
    this.tempQuestion.type = type;
  }

  updateQuestion(type: PollQuestionTypes): void {
    this.isVisible = false;

    if (!this.hasAnswers) {
      this.updateQuestionType(type);
      this.addAnswer();

      return;
    }

    if (type === this.tempQuestion.type) {
      return;
    }

    const imageTypes = [PollQuestionTypes.image, PollQuestionTypes.imageText];
    const { ownImage } = this.tempQuestion.settings;

    const isTextType = type === PollQuestionTypes.text;
    const isImageType = imageTypes.includes(type);
    const isEmojiType = type === PollQuestionTypes.emoji;

    let answers = [...this.tempQuestion.answers];

    answers = answers.map(item => ({
      type,
      timestamp: item.timestamp,
      text: item.text,
      image: isImageType ? item.image : null,
      emoji: isEmojiType ? item.emoji : null
    }));

    this.updateQuestionType(type);
    this.tempQuestion.answers = [...answers];
    this.tempQuestion.settings.ownImage = isTextType ? null : ownImage;
  }

  updateAnswer(index: number, answer: PollQuestionAnswer): void {
    const answers = [...this.tempQuestion.answers];

    answers[index] = { ...answer };
    this.tempQuestion.answers = [...answers];
  }

  removePoll(index: number): void {
    this.tempQuestion.answers.splice(index, 1);
  }

  clearQuestion(): void {
    this.isQuestionHidden = false;
    this.tempQuestion = {
      name: '',
      type: PollQuestionTypes.text,
      answers: [],
      settings: {
        isMultipleAnswers: false,
        ownImage: null
      }
    };
  }

  @Watch('tempQuestion', { deep: true })
  changeTempQuestion(question: PollQuestionResponse): void {
    this.$emit(PollQuestionEvent.updateQuestion, { ...question });
  }
}
