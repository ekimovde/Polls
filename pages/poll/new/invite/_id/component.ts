import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { validationMixin } from 'vuelidate';
import { ValidationRule, required, email } from 'vuelidate/lib/validators';
import { COMPONENT_NAME, PollNewInviteIdPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { BrandBlock } from '~/components/brand';
import { uiButton, uiInput, uiTextarea } from '~/components/ui';
import { BrandBlockSize } from '~/components/brand/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { UiInputSize } from '~/components/ui/input/component';
import { routes } from '~/shared/repository/routes';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { getPollNewSummaryIdRoute } from '~/shared/repository/routes/poll';
import { PollResponse, SendPollInviteRequest } from '~/shared/repository/repo';

@Component({
  name: COMPONENT_NAME,
  mixins: [validationMixin],
  components: {
    BrandBlock,
    uiButton,
    uiInput,
    uiTextarea
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(PollNewInviteIdPagePageTextAttribute)

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly notifier = this.$projectServices.notification;

  readonly brandBlockSize = BrandBlockSize;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly uiInputSize = UiInputSize;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $v: any = {};

  poll: PollResponse = null;
  form: SendPollInviteRequest = {
    pollId: null,
    description: 'Let’s use Stand to complete daily stand-ups, please complete stand-ups at the start of your working day.',
    emailTo: ''
  }

  isPageLoading = false;
  isLoading = false;

  get isFormInvalid(): boolean {
    return this.$v.form.$invalid as boolean;
  }

  get hasEmailToInputError(): boolean {
    return <boolean> this.$v.form.emailTo.$invalid && <boolean> this.$v.form.emailTo.$dirty;
  }

  get id(): string {
    return this.$route.params.id;
  }

  get pollsRoute(): Partial<Route> {
    return routes[RoutesName.polls];
  }

  get pollNewSummaryIdRoute(): Partial<Route> {
    return getPollNewSummaryIdRoute(this.id);
  }

  get displayedPollName(): string {
    return this.poll ? this.poll.name : null;
  }

  get displayedCopyright(): string {
    return `© ${new Date().getFullYear()}`;
  }

  async created(): Promise<void> {
    try {
      this.isPageLoading = true;

      await this.getPoll();
      void this.updatePollIdInForm();
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isPageLoading = false;
    }
  }

  async getPoll(): Promise<void> {
    this.poll = await this.projectRepository.getPoll(this.id);
  }

  async sendPollInvite(): Promise<void> {
    if (this.isFormInvalid) {
      this.$v.form.$touch();
      return;
    }

    try {
      this.isLoading = true;

      await this.projectRepository.sendPollInvite(this.form);
      void this.$router.push(getPollNewSummaryIdRoute(this.id));
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }

  validations(): Record<string, Partial<ValidationRule>> {
    return {
      form: {
        emailTo: { required, email }
      }
    };
  }

  updatePollIdInForm(): void {
    this.form.pollId = this.poll.id;
  }
}
