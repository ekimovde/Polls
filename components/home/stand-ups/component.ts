import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, HomeStandUpsTextAttribute, HomeStandUpsTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { HomeBlockLayout } from '~/components/home/block-layout';
import { HomeBlockTheme } from '../model';
import { HomeBlockLayoutView } from '../block-layout/component';

@Component({
  name: COMPONENT_NAME,
  components: {
    HomeBlockLayout
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = HomeStandUpsTextAttribute;
  readonly testLocators = HomeStandUpsTestLocator;

  readonly homeBlockLayoutView = HomeBlockLayoutView;

  readonly homeBlockTheme = HomeBlockTheme;

  readonly picture = require('@assets/images/home/stand-ups.jpg');
}
