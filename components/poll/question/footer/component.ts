import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { Tooltip } from 'element-ui';
import { COMPONENT_NAME, PollQuestionFooterTextAttribute, PollQuestionFooterTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton, uiTooltip, uiSwitch } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { UiTooltipPlacement } from '~/components/ui/tooltip/component';
import { UiSwitchSize } from '~/components/ui/switch/component';

enum PollQuestionFooterEvent {
  ownImage = 'own-image',
  remove = 'remove',
  setQuestionDisplay = 'update:is-question-hidden',
  setMultipleAnswers = 'update:is-multiple-answers'
}

export enum PollQuestionFooterView {
  default = 'default',
  list = 'list'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    ElTooltip: Tooltip,
    uiButton,
    uiTooltip,
    uiSwitch
  }
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: String,
    validator: val => Object.values(PollQuestionFooterView).includes(val),
    default: PollQuestionFooterView.default
  }) readonly view: PollQuestionFooterView;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isQuestionHidden: boolean;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isMultipleAnswers: boolean;

  readonly textAttributes = PollQuestionFooterTextAttribute;
  readonly testLocators = PollQuestionFooterTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly uiTooltipPlacement = UiTooltipPlacement;

  readonly uiSwitchSize = UiSwitchSize;

  readonly pollQuestionFooterEvent = PollQuestionFooterEvent;

  isSettingsVisible = false;

  get isDefaultView(): boolean {
    return this.view === PollQuestionFooterView.default;
  }

  get isButtonsBlockShown(): boolean {
    return this.isDefaultView && !this.isQuestionHidden;
  }

  get iconForExpandButton(): string {
    return this.isQuestionHidden ? 'bx bx-hide' : 'bx bx-show';
  }

  toggleSettingsVisible(): void {
    this.isSettingsVisible = !this.isSettingsVisible;
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
}
