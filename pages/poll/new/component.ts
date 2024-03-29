import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { validationMixin } from 'vuelidate';
import { ValidationRule, required } from 'vuelidate/lib/validators';
import { COMPONENT_NAME, PollNewPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { BrandBlock } from '~/components/brand';
import { uiInput, uiButton, uiSelect, uiSwitch } from '~/components/ui';
import { BrandBlockSize } from '~/components/brand/component';
import { UiInputSize } from '~/components/ui/input/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { routes } from '~/shared/repository/routes';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { UiSelectView } from '~/components/ui/select/component';
import { selectOptionsWithColors, selectOptionsWithTimeHours, selectOptionsWithTimeMinutes, selectOptionsWithDateMonths, selectOptionsWithDateDays } from '~/static-data/select/factory';
import { SetPollRequest } from '~/shared/repository/repo';
import { SharedColorTheme } from '~/components/shared/color/component';
import { PollCategory } from '~/shared/repository/constants';
import { getPollNewShareIdRoute } from '~/shared/repository/routes/poll';
import { PollQuestion } from '~/components/poll/question';
import { fakePollQuestion } from '~/shared/repository/fixtures/fake-poll-question';
import { UiSwitchSize, UiSwitchView } from '~/components/ui/switch/component';

@Component({
  name: COMPONENT_NAME,
  mixins: [validationMixin],
  components: {
    BrandBlock,
    uiInput,
    uiButton,
    uiSelect,
    uiSwitch,
    PollQuestion
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = PollNewPagePageTextAttribute;

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly notifier = this.$projectServices.notification;

  readonly brandBlockSize = BrandBlockSize;

  readonly uiInputSize = UiInputSize;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly uiSelectView = UiSelectView;

  readonly uiSwitchSize = UiSwitchSize;
  readonly uiSwitchView = UiSwitchView;

  readonly options = selectOptionsWithColors();
  readonly optionsWithDateMonths = selectOptionsWithDateMonths();
  readonly optionsWithDateDays = selectOptionsWithDateDays();
  readonly optionsWithTimeHours = selectOptionsWithTimeHours();
  readonly optionsWithTimeMinutes = selectOptionsWithTimeMinutes();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $v: any = {};

  form: SetPollRequest = {
    name: '',
    color: SharedColorTheme.blue,
    category: PollCategory.animals,
    date: {
      month: null,
      day: null
    },
    time: {
      hour: null,
      minute: null
    },
    question: { ...fakePollQuestion() },
    isPublic: true
  }

  isLoading = false;

  get isFormInvalid(): boolean {
    return this.$v.form.$invalid as boolean;
  }

  get hasNameInputError(): boolean {
    return <boolean> this.$v.form.name.$invalid && <boolean> this.$v.form.name.$dirty;
  }

  get pollsRoute(): Partial<Route> {
    return routes[RoutesName.polls];
  }

  get displayedSwitchContent(): string {
    const { publicText, privateText } = this.textAttributes;
    return this.form.isPublic ? publicText : privateText;
  }

  get displayedCopyright(): string {
    return `© ${new Date().getFullYear()}`;
  }

  validations(): Record<string, Partial<ValidationRule>> {
    return {
      form: {
        name: { required },
        category: { required },
        color: { required },
        date: {
          month: { required },
          day: { required }
        },
        time: {
          hour: { required },
          minute: { required }
        },
        question: {
          name: { required },
          type: { required },
          answers: { required }
        }
      }
    };
  }

  async setPoll(): Promise<void> {
    if (this.isFormInvalid) {
      this.$v.form.$touch();
      return;
    }

    try {
      this.isLoading = true;

      const { id } = await this.projectRepository.setPoll(this.form);
      void this.$router.push(getPollNewShareIdRoute(String(id)));
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }
}
