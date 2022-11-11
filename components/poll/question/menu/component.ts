import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, PollQuestionMenuTextAttribute, PollQuestionMenuTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { PollQuestionType } from '~/components/poll/question/type';
import { pollQuestionTypeOptions } from '~/static-data/poll/question-type/factory';
import { PollQuestionTypeView } from '../type/component';
import { PollQuestionTypes } from '../../model';

export enum PollQuestionMenuView {
  list = 'list',
  grid = 'grid'
}

enum PollQuestionMenuEvent {
  chooseType = 'choose-type'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    PollQuestionType
  }
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: String,
    validator: val => Object.values(PollQuestionMenuView).includes(val),
    default: PollQuestionMenuView.list
  }) readonly view: PollQuestionMenuView;

  readonly textAttributes = this.transAll(PollQuestionMenuTextAttribute);
  readonly testLocators = PollQuestionMenuTestLocator;

  readonly pollQuestionTypeView = PollQuestionTypeView;

  readonly pollQuestionTypeOptions = pollQuestionTypeOptions();

  chooseType(type: PollQuestionTypes): void {
    this.$emit(PollQuestionMenuEvent.chooseType, type);
  }
}
