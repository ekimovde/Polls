import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, ReactionsBlockTextAttribute, ReactionsBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiProgress, uiButton } from '~/components/ui';
import { ReactionResponse } from '~/shared/repository/repo';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '../ui/button/component';

export enum ReactionsBlockView {
  default = 'default',
  regular = 'regular'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    uiProgress,
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: Array,
    required: true
  }) readonly reactions: ReactionResponse[];

  @Prop({
    type: String,
    validator: val => Object.values(ReactionsBlockView).includes(val),
    default: ReactionsBlockView.default
  }) readonly view: ReactionsBlockView;

  readonly textAttributes = ReactionsBlockTextAttribute;
  readonly testLocators = ReactionsBlockTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  get displayedReactionsInfo(): string {
    const wordVariants = ['реакция', 'реакции', 'реакций'];
    const variableName = 'DAYS_NUMBER_VAR';
    const quantityOfReactions = this.reactions.length;
    const { pollInfo } = this.textAttributes;

    const wordPlural = this.pluralizeChoice(quantityOfReactions, wordVariants, variableName);

    return `${this.trans(wordPlural, { [variableName]: `${quantityOfReactions}` })} ${pollInfo}`;
  }
}
