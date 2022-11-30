import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { validationMixin } from 'vuelidate';
import { ValidationRule, required, email, minLength, maxLength } from 'vuelidate/lib/validators';
import { COMPONENT_NAME, AuthPageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { BrandBlock } from '~/components/brand';
import { BrandBlockSize } from '~/components/brand/component';
import { uiInput, uiButton } from '~/components/ui';
import { UiInputSize, UiInputType } from '~/components/ui/input/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { routes } from '~/shared/repository/routes';
import { SigninRequest } from '~/shared/repository/repo';

@Component({
  name: COMPONENT_NAME,
  mixins: [validationMixin],
  components: {
    BrandBlock,
    uiInput,
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = AuthPageTextAttribute;

  readonly userRepo = this.$projectServices.userRepo;
  readonly notifier = this.$projectServices.notification;

  readonly brandBlockSize = BrandBlockSize;

  readonly uiInputSize = UiInputSize;
  readonly uiInputType = UiInputType;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $v: any = {};

  form: SigninRequest = {
    email: 'ekimov_de@mail.ru',
    password: '123456'
  }

  isLoading = false;

  get isFormInvalid(): boolean {
    return this.$v.form.$invalid as boolean;
  }

  get hasEmailInputError(): boolean {
    return <boolean> this.$v.form.email.$invalid && <boolean> this.$v.form.email.$dirty;
  }

  get hasPasswordInputError(): boolean {
    return <boolean> this.$v.form.password.$invalid && <boolean> this.$v.form.password.$dirty;
  }

  get authRegistrationRoute(): Partial<Route> {
    return routes[RoutesName.authRegistration];
  }

  get displayedCopyright(): string {
    return `© ${new Date().getFullYear()}`;
  }

  validations(): Record<string, Partial<ValidationRule>> {
    return {
      form: {
        email: { required, email },
        password: { required, minLength: minLength(4), maxLength: maxLength(16) }
      }
    };
  }

  resetPassword(): void {
    void this.$router.push(this.authRegistrationRoute);
  }

  signup(): void {
    void this.$router.push(this.authRegistrationRoute);
  }

  async signin(): Promise<void> {
    if (this.isFormInvalid) {
      this.$v.form.$touch();
      return;
    }

    try {
      this.isLoading = true;

      await this.userRepo.signin(this.form);
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }
}
