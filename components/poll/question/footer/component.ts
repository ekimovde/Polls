import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, PollQuestionFooterTextAttribute, PollQuestionFooterTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton, uiTooltip, uiSwitch } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { UiTooltipPlacement } from '~/components/ui/tooltip/component';
import { UiSwitchSize, UiSwitchView } from '~/components/ui/switch/component';
import { PollQuestionImageUploader } from '~/components/poll/question/image-uploader';
import { PollQuestionTypes } from '../../model';

enum PollQuestionFooterEvent {
  remove = 'remove',
  setQuestionDisplay = 'update:is-question-hidden',
  setMultipleAnswers = 'update:is-multiple-answers',
  updateOwnImage = 'update:own-image'
}

enum PollQuestionFooterActionType {
  settings = 'settings',
  ownImage = 'own-image'
}

export enum PollQuestionFooterView {
  default = 'default',
  list = 'list'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton,
    uiTooltip,
    uiSwitch,
    PollQuestionImageUploader
  }
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: String,
    validator: val => Object.values(PollQuestionFooterView).includes(val),
    default: PollQuestionFooterView.default
  }) readonly view: PollQuestionFooterView;

  @Prop({
    type: String,
    validator: val => Object.values(PollQuestionTypes).includes(val),
    default: PollQuestionTypes.text
  }) readonly questionType: PollQuestionTypes;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isQuestionHidden: boolean;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isMultipleAnswers: boolean;

  @Prop({
    type: String,
    default: null
  }) readonly ownImage: boolean;

  readonly textAttributes = PollQuestionFooterTextAttribute;
  readonly testLocators = PollQuestionFooterTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly uiTooltipPlacement = UiTooltipPlacement;

  readonly uiSwitchSize = UiSwitchSize;
  readonly uiSwitchView = UiSwitchView;

  readonly pollQuestionFooterEvent = PollQuestionFooterEvent;

  readonly pollQuestionFooterActionType = PollQuestionFooterActionType;

  selectedActionType: PollQuestionFooterActionType = null;

  get isDefaultView(): boolean {
    return this.view === PollQuestionFooterView.default;
  }

  get hasQuestionType(): boolean {
    return Boolean(this.questionType);
  }

  get isSettingsActionType(): boolean {
    return this.selectedActionType === PollQuestionFooterActionType.settings;
  }

  get isUploadingImageActionType(): boolean {
    return this.selectedActionType === PollQuestionFooterActionType.ownImage;
  }

  get isButtonsBlockShown(): boolean {
    return this.isDefaultView && !this.isQuestionHidden;
  }

  get isUploadingImageButtonShown(): boolean {
    const imageTypes = [PollQuestionTypes.image, PollQuestionTypes.imageText];
    return this.hasQuestionType && imageTypes.includes(this.questionType);
  }

  get iconForExpandButton(): string {
    return this.isQuestionHidden ? 'bx bx-hide' : 'bx bx-show';
  }

  setActionType(type: PollQuestionFooterActionType): void {
    if (type === this.selectedActionType) {
      this.selectedActionType = null;
      return;
    }

    this.selectedActionType = type;
  }

  sendEvent(event: PollQuestionFooterEvent): void {
    switch (event) {
      case PollQuestionFooterEvent.setQuestionDisplay:
        void this.$emit(PollQuestionFooterEvent.setQuestionDisplay, !this.isQuestionHidden);
        break;
      case PollQuestionFooterEvent.setMultipleAnswers:
        void this.$emit(PollQuestionFooterEvent.setMultipleAnswers, !this.isMultipleAnswers);
        break;
      default:
        void this.$emit(event);
        break;
    }
  }

  chooseOwnImage(image: string): void {
    void this.$emit(PollQuestionFooterEvent.updateOwnImage, image);
  }
}
