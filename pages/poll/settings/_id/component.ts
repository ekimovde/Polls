import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { validationMixin } from 'vuelidate';
import { ValidationRule, required } from 'vuelidate/lib/validators';
import isEqual from 'lodash/isEqual';
import { COMPONENT_NAME, PollSettingsIdPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiInput, uiSelect, uiButton } from '~/components/ui';
import { UiInputSize } from '~/components/ui/input/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { getPollIdRoute } from '~/shared/repository/routes/poll';
import { UiSelectView } from '~/components/ui/select/component';
import { selectOptionsWithColors } from '~/static-data/select/factory';
import { SetPollRequest, PollResponse } from '~/shared/repository/repo';

@Component({
  name: COMPONENT_NAME,
  mixins: [validationMixin],
  components: {
    uiInput,
    uiSelect,
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(PollSettingsIdPagePageTextAttribute)

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly notifier = this.$projectServices.notification;

  readonly uiInputSize = UiInputSize;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly uiSelectView = UiSelectView;

  readonly options = selectOptionsWithColors();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $v: any = {};

  form: SetPollRequest = {
    name: '',
    color: null,
    category: null,
    isPublic: true
  }

  poll: PollResponse = null;
  tempPoll: Partial<PollResponse> = null;

  isLoading = false;
  isUpdateLoading = false;

  get id(): string {
    return this.$route.params.id;
  }

  get pollIdRoute(): Partial<Route> {
    return getPollIdRoute(this.id);
  }

  get isFormInvalid(): boolean {
    return this.$v.form.$invalid as boolean;
  }

  get isPollEqual(): boolean {
    return isEqual(this.form, this.tempPoll);
  }

  get hasPoll(): boolean {
    return Boolean(this.poll);
  }

  async created(): Promise<void> {
    try {
      this.isLoading = true;

      await this.getPoll();
      void this.updateForm();
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }

  async getPoll(): Promise<void> {
    this.poll = await this.projectRepository.getPoll(this.id);
  }

  async updatePoll(): Promise<void> {
    if (this.isFormInvalid) {
      this.$v.form.$touch();
      return;
    }

    try {
      this.isUpdateLoading = true;

      await this.projectRepository.updatePoll(String(this.poll.id), this.form);
      void this.$router.push(getPollIdRoute(this.id));
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isUpdateLoading = false;
    }
  }

  validations(): Record<string, Partial<ValidationRule>> {
    return {
      form: {
        name: { required },
        color: { required },
        category: { required },
        isPublic: { required }
      }
    };
  }

  updateForm(): void {
    if (!this.hasPoll) {
      return;
    }

    const { name, color, category, isPublic } = this.poll;
    const payload = { name, color, category, isPublic };

    this.form = { ...payload };
    this.tempPoll = { ...payload };
  }
}
