import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, PollQuestionHelpTextAttribute, PollQuestionHelpTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';

enum PollQuestionHelpEvent {
  addAnswer = 'add-answer'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = PollQuestionHelpTextAttribute;
  readonly testLocators = PollQuestionHelpTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  addAnswer(): void {
    void this.$emit(PollQuestionHelpEvent.addAnswer);
  }
}
