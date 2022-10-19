import { Component, Vue } from 'nuxt-property-decorator';
import { COMPONENT_NAME } from './attributes';
import { TextAttributes, TextValues } from '~/shared/services/translator';
import { pluralize } from '~/shared/utils/pluralize';

@Component({
  name: COMPONENT_NAME
})
export default class extends Vue {
  readonly translator = this.$projectServices.translator;

  trans(key: string, params: Record<string, string> = {}): string {
    return this.translator.trans(key, params);
  }

  transAll<T extends TextAttributes>(values: T): TextValues<T> {
    return this.$projectServices.translator.transAll(values);
  }

  pluralizeChoice(number: number, wordVariants: string[], variableName: string): string {
    const wordPlural = pluralize(number, wordVariants);

    if (number === 1) {
      return `1 ${wordPlural}`;
    }

    return `${variableName} ${wordPlural}`;
  }
}
