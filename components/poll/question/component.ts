import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, PollQuestionTextAttribute, PollQuestionTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { PollQuestionCounter } from '~/components/poll/question/counter';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { PollQuestionType } from '~/components/poll/question/type';
import { pollQuestionTypeOption, pollQuestionTypeOptions } from '~/static-data/poll/question-type/factory';
import { PollQuestionTypeView } from './type/component';

@Component({
  name: COMPONENT_NAME,
  components: {
    PollQuestionCounter,
    uiButton,
    PollQuestionType
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(PollQuestionTextAttribute);
  readonly testLocators = PollQuestionTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly PollQuestionTypeView = PollQuestionTypeView;

  readonly pollQuestionTypeOption = pollQuestionTypeOption();
  readonly pollQuestionTypeOptions = pollQuestionTypeOptions();

  count = 0;

  isExpand = true;

  get isAnswersEmpty(): boolean {
    return true;
  }

  get iconForExpandButton(): string {
    return this.isExpand ? 'bx bx-show' : 'bx bx-hide';
  }

  addAnswer(): void {
    //
  }
}
