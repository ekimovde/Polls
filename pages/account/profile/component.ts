import { Component, mixins } from 'nuxt-property-decorator';
import isEqual from 'lodash/isEqual';
import { COMPONENT_NAME, AccountProfilePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiInput, uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { LinkList } from '~/components/link-list';
import { UiInputSize } from '~/components/ui/input/component';
import { SelfInfoResponse } from '~/shared/repository/repo';
import { UploadPicture } from '~/components/upload-picture';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiInput,
    uiButton,
    LinkList,
    UploadPicture
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(AccountProfilePageTextAttribute)

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly userRepo = this.$projectServices.userRepo;
  readonly notifier = this.$projectServices.notification;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly uiInputSize = UiInputSize;

  form: AccountProfileInfo = {
    avatar: '',
    firstName: '',
    lastName: '',
    nickName: ''
  }

  isLoading = false;

  get isUserInfoEqual(): boolean {
    return isEqual(this.selfInfo, this.form);
  }

  get hasSelfInfo(): boolean {
    return Boolean(this.userRepo.user);
  }

  get selfInfo(): AccountProfileInfo {
    if (!this.hasSelfInfo) {
      return null;
    }

    const { avatar, firstName, lastName, nickName } = this.userRepo.user;
    return { avatar, firstName, lastName, nickName };
  }

  created(): void {
    void this.formUpdate();
  }

  formUpdate(): void {
    if (!this.hasSelfInfo) {
      return null;
    }

    const { avatar, firstName, lastName, nickName } = this.userRepo.user;
    this.form = { avatar, firstName, lastName, nickName };
  }

  async setUserInfo(): Promise<void> {
    try {
      this.isLoading = true;

      const userInfo = await this.projectRepository.setUserInfo(this.form);

      void this.userRepo.updateInfo(userInfo);
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }
}

type AccountProfileInfo = Pick<SelfInfoResponse, 'avatar' | 'firstName' | 'lastName' | 'nickName'>
