import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { validationMixin } from 'vuelidate';
import { ValidationRule, required, email, minLength, maxLength, helpers } from 'vuelidate/lib/validators';
import { COMPONENT_NAME, AuthRegistrationPageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiInput, uiButton } from '~/components/ui';
import { UiInputSize, UiInputType } from '~/components/ui/input/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { BrandBlock } from '~/components/brand';
import { BrandBlockSize } from '~/components/brand/component';
import { routes } from '~/shared/repository/routes';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { SignupRequest } from '~/shared/repository/repo';

const regexForNickName = helpers.regex('alpha', /^[A-Za-z\d_]{5,32}$/);

@Component({
  name: COMPONENT_NAME,
  mixins: [validationMixin],
  components: {
    uiInput,
    uiButton,
    BrandBlock
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = AuthRegistrationPageTextAttribute;

  readonly userRepo = this.$projectServices.userRepo;
  readonly notifier = this.$projectServices.notification;

  readonly uiInputSize = UiInputSize;
  readonly uiInputType = UiInputType;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly brandBlockSize = BrandBlockSize;

  readonly picture = require('@assets/images/home-slide.png');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $v: any = {};

  form: SignupRequest = {
    firstName: '',
    lastName: '',
    nickName: '',
    email: '',
    password: ''
  }

  isLoading = false;

  get isFormInvalid(): boolean {
    return this.$v.form.$invalid as boolean;
  }

  get hasFirstNameInputError(): boolean {
    return <boolean> this.$v.form.firstName.$invalid && <boolean> this.$v.form.firstName.$dirty;
  }

  get hasLastNameInputError(): boolean {
    return <boolean> this.$v.form.lastName.$invalid && <boolean> this.$v.form.lastName.$dirty;
  }

  get hasNickNameInputError(): boolean {
    return <boolean> this.$v.form.nickName.$invalid && <boolean> this.$v.form.nickName.$dirty;
  }

  get hasEmailInputError(): boolean {
    return <boolean> this.$v.form.email.$invalid && <boolean> this.$v.form.email.$dirty;
  }

  get hasPasswordInputError(): boolean {
    return <boolean> this.$v.form.password.$invalid && <boolean> this.$v.form.password.$dirty;
  }

  get authLoginRoute(): Partial<Route> {
    return routes[RoutesName.auth];
  }

  get displayedCopyright(): string {
    return `© ${new Date().getFullYear()}`;
  }

  validations(): Record<string, Partial<ValidationRule>> {
    return {
      form: {
        firstName: { required },
        lastName: { required },
        nickName: { required, regexForNickName },
        email: { required, email },
        password: { required, minLength: minLength(4), maxLength: maxLength(16) }
      }
    };
  }

  signin(): void {
    void this.$router.push(this.authLoginRoute);
  }

  async signup(): Promise<void> {
    if (this.isFormInvalid) {
      this.$v.form.$touch();
      return;
    }

    try {
      this.isLoading = true;

      await this.userRepo.signup(this.form);
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }
}
