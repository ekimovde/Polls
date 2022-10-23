import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, PollBlockTextAttribute, PollBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { SharedBadge, SharedColor } from '~/components/shared/';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '../ui/button/component';
import { PollResponse } from '~/shared/repository/repo';
import { AvatarBlock } from '~/components/avatar';
import { getPollIdRoute } from '~/shared/repository/routes/poll';

export enum PollBlockView {
  default = 'default',
  regular = 'regular'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    SharedBadge,
    SharedColor,
    uiButton,
    AvatarBlock
  }
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: Object,
    required: true,
    default: () => ({})
  }) readonly poll: PollResponse;

  @Prop({
    type: String,
    validator: val => Object.values(PollBlockView).includes(val),
    default: PollBlockView.default
  }) readonly view: PollBlockView;

  readonly textAttributes = this.transAll(PollBlockTextAttribute);
  readonly testLocators = PollBlockTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  get isDefaultView(): boolean {
    return this.view === PollBlockView.default;
  }

  get isRegularView(): boolean {
    return this.view === PollBlockView.regular;
  }

  open(): void {
    void this.$router.push(getPollIdRoute(String(this.poll.id)));
  }
}
