import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, PollVoteOptionTextAttribute, PollVoteOptionTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton, uiRadio } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { PollQuestionAnswer, PollQuestionTypes } from '../../model';
import { UiRadioView } from '~/components/ui/radio/component';

enum PollVoteOptionEvent {
  update = 'update:selected-answer',
  choose = 'choose'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton,
    uiRadio
  }
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: Object,
    default: () => ({})
  }) readonly answer: PollQuestionAnswer;

  @Prop({
    type: Object,
    default: () => ({})
  }) readonly selectedAnswer: PollQuestionAnswer;

  @Prop({
    type: String,
    default: null
  }) readonly ownImage: string;

  readonly textAttributes = this.transAll(PollVoteOptionTextAttribute);
  readonly testLocators = PollVoteOptionTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly uiRadioView = UiRadioView;

  get timestamp(): number {
    return this.answer?.timestamp;
  }

  get type(): PollQuestionTypes {
    return this.answer?.type;
  }

  get isActive(): boolean {
    return this.selectedAnswer.timestamp === this.timestamp;
  }

  get isImageType(): boolean {
    return this.answer.type === PollQuestionTypes.image;
  }

  get hasImage(): boolean {
    return Boolean(this.answer?.image);
  }

  get hasOwnImage(): boolean {
    return Boolean(this.ownImage);
  }

  get displayedImage(): string {
    if (this.hasOwnImage && !this.hasImage) {
      return this.ownImage;
    }

    return this.answer?.image;
  }

  choose(): void {
    void this.$emit(PollVoteOptionEvent.update, this.answer);
    void this.$emit(PollVoteOptionEvent.choose, this.answer);
  }
}
