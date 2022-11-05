import { Component, mixins } from 'nuxt-property-decorator';
import { ValidationRule, required, minLength, maxLength } from 'vuelidate/lib/validators';
import { COMPONENT_NAME, AccountProfilePasswordPageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton, uiInput } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { UiInputType } from '~/components/ui/input/component';
import { SetUserPasswordRequest } from '~/shared/repository/repo';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton,
    uiInput
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(AccountProfilePasswordPageTextAttribute)

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly notifier = this.$projectServices.notification;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly uiInputType = UiInputType;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $v: any = {};

  form: SetUserPasswordRequest = {
    password: '',
    newPassword: ''
  };

  isLoading = false;

  get isFormInvalid(): boolean {
    return this.$v.form.$invalid as boolean;
  }

  get hasPasswordInputError(): boolean {
    return <boolean> this.$v.form.password.$invalid && <boolean> this.$v.form.password.$dirty;
  }

  get hasNewPasswordInputError(): boolean {
    return <boolean> this.$v.form.newPassword.$invalid && <boolean> this.$v.form.newPassword.$dirty;
  }

  validations(): Record<string, Partial<ValidationRule>> {
    const rules: Record<string, Partial<ValidationRule>> = {
      required,
      minLength: minLength(4),
      maxLength: maxLength(16)
    };

    return {
      form: {
        password: { ...rules },
        newPassword: { ...rules }
      }
    };
  }

  async setPassword(): Promise<void> {
    if (this.isFormInvalid) {
      this.$v.form.$touch();
      return;
    }

    try {
      this.isLoading = true;

      await this.projectRepository.setUserPassword(this.form);
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }
}
