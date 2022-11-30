import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { isEmpty } from 'lodash';
import { COMPONENT_NAME, PollVoteTextAttribute, PollVoteTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { PollVoteOption } from '~/components/poll/vote/option';
import { fakePollAnswers } from '~/shared/repository/fixtures/fake-poll-answers';
import { fakePollQuestion } from '~/shared/repository/fixtures/fake-poll-question';
import { PollQuestionResponse, PollQuestionTypes, PollQuestionAnswer } from '../model';
import { PollVoteInfo } from '~/components/poll/vote/info';
import { PollVoteResult } from '~/components/poll/vote/result';

const DEFAULT_QUANTITY_OF_ANSWERS = 1;

enum PollVoteEvent {
  vote = 'vote'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    PollVoteOption,
    PollVoteInfo,
    PollVoteResult,
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: Object,
    default: () => ({})
  }) readonly question: PollQuestionResponse;

  readonly textAttributes = PollVoteTextAttribute;
  readonly testLocators = PollVoteTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly fakePollQuestion = fakePollQuestion({ name: 'Text' });
  readonly fakePollAnswers = fakePollAnswers()

  selectedAnswer: Partial<PollQuestionAnswer> = {};

  get hasQuestion(): boolean {
    return !isEmpty(this.question);
  }

  get hasSelectedAnswer(): boolean {
    return !isEmpty(this.selectedAnswer);
  }

  get hasImage(): boolean {
    return Boolean(this.selectedAnswer.image);
  }

  get hasOwnImage(): boolean {
    return Boolean(this.question.settings.ownImage);
  }

  get isOnlyAnswer(): boolean {
    if (!this.hasQuestion) {
      return false;
    }

    return this.question.answers.length === DEFAULT_QUANTITY_OF_ANSWERS;
  }

  get isImageTextType(): boolean {
    return this.question?.type === PollQuestionTypes.imageText;
  }

  get isImageShown(): boolean {
    return this.hasSelectedAnswer && this.isImageTextType && (this.hasImage || this.hasOwnImage);
  }

  get ownImage(): string {
    if (!this.hasQuestion) {
      return null;
    }

    return this.question?.settings.ownImage;
  }

  get displayedImage(): string {
    return this.selectedAnswer?.image || this.ownImage;
  }

  get displayedImagePlaceholder(): string {
    if (!this.hasSelectedAnswer) {
      return this.textAttributes.selectAnswer;
    }

    return this.selectedAnswer.text;
  }

  vote(): void {
    void this.$emit(PollVoteEvent.vote, this.selectedAnswer);
  }
}
