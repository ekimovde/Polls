import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, PollBlockTextAttribute, PollBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { SharedBadge, SharedColor } from '~/components/shared/';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '../ui/button/component';
import { UserPopularPollsResponse } from '~/shared/repository/repo';

@Component({
  name: COMPONENT_NAME,
  components: {
    SharedBadge,
    SharedColor,
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: Object,
    required: true,
    default: () => ({})
  }) readonly poll: UserPopularPollsResponse;

  readonly textAttributes = this.transAll(PollBlockTextAttribute);
  readonly testLocators = PollBlockTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;
}
