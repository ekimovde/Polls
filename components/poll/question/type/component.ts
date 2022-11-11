import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, PollQuestionTypeTextAttribute, PollQuestionTypeTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { PollQuestionTypes } from '../../model';

export enum PollQuestionTypeView {
  default = 'default',
  card = 'card'
}

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: String,
    validator: val => Object.values(PollQuestionTypeView).includes(val),
    default: PollQuestionTypeView.default
  }) readonly view: PollQuestionTypeView;

  @Prop({
    type: Object,
    required: true
  }) readonly option: PollQuestionTypeOption;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isActive: boolean;

  @Prop({
    type: Boolean,
    default: false
  }) readonly hasIcon: boolean;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isDisabled: boolean;

  readonly textAttributes = this.transAll(PollQuestionTypeTextAttribute);
  readonly testLocators = PollQuestionTypeTestLocator;

  get isDefaultView(): boolean {
    return this.view === PollQuestionTypeView.default;
  }
}

export interface PollQuestionTypeOption {
  icon: string;
  title: string;
  type: PollQuestionTypes;
}
