import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, PollIdPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton, uiDropdown, uiModal, uiTooltip } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { AvatarBlock } from '~/components/avatar';
import { TabLinks } from '~/components/tab-links';
import { AvatarBlockSize } from '~/components/avatar/component';
import { getPollSettingsIdRoute } from '~/shared/repository/routes/poll';
import { pollSettingsDropdownList } from '~/static-data/dropdown/factory';
import { DropdownItemTypeBase } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { PollResponse } from '~/shared/repository/repo';
import { UiTooltipPlacement } from '~/components/ui/tooltip/component';

@Component({
  name: COMPONENT_NAME,
  components: {
    AvatarBlock,
    TabLinks,
    uiButton,
    uiDropdown,
    uiModal,
    uiTooltip
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(PollIdPagePageTextAttribute);

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly notifier = this.$projectServices.notification;
  readonly userRepo = this.$projectServices.userRepo;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly avatarBlockSize = AvatarBlockSize;

  readonly uiTooltipPlacement = UiTooltipPlacement;

  readonly dropdownList = pollSettingsDropdownList();

  poll: PollResponse = null;

  isLoading = false;
  isRemoveLoading = false;

  isVisible = false;
  isModalVisible = false;

  get id(): string {
    return this.$route.params.id;
  }

  get userId(): number {
    return this.userRepo.user?.id;
  }

  get fullNameByAuthor(): string {
    return this.poll?.author.fullName;
  }

  get avatarByAuthor(): string {
    return this.poll?.author.avatar;
  }

  get pollSettingsIdRoute(): Partial<Route> {
    return getPollSettingsIdRoute(this.id);
  }

  get isSettingsButtonShown(): boolean {
    return this.userId === this.poll?.userId;
  }

  async created(): Promise<void> {
    try {
      this.isLoading = true;

      await this.getPoll();
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }

  async getPoll(): Promise<void> {
    this.poll = await this.projectRepository.getPoll(this.id);
  }

  async remove(): Promise<void> {
    try {
      this.isRemoveLoading = true;

      await this.projectRepository.removePoll(this.id);
      void this.$router.push({ name: RoutesName.polls });
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isRemoveLoading = false;
      this.isModalVisible = false;
    }
  }

  toggleVisible(): void {
    this.isVisible = !this.isVisible;
  }

  open(route: Route, type: DropdownItemTypeBase): void {
    this.isVisible = false;

    if (type === DropdownItemTypeBase.regular) {
      this.isModalVisible = true;
      return;
    }

    void this.$router.push({ name: route.name, params: { id: this.id } });
  }
}
