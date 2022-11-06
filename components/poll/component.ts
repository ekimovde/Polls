import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { formatDistance, differenceInMinutes, differenceInHours, isValid, isYesterday } from 'date-fns';
import { COMPONENT_NAME, PollBlockTextAttribute, PollBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { SharedBadge, SharedColor } from '~/components/shared/';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '../ui/button/component';
import { PollResponse } from '~/shared/repository/repo';
import { AvatarBlock } from '~/components/avatar';
import { getPollIdRoute } from '~/shared/repository/routes/poll';
import { AvatarBlockSize } from '../avatar/component';
import { getDateFnsLocale } from '~/shared/utils/get-date-fns-locale';

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

  readonly textAttributes = PollBlockTextAttribute;
  readonly testLocators = PollBlockTestLocator;

  readonly userRepo = this.$projectServices.userRepo;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly avatarBlockSize = AvatarBlockSize;

  get isDefaultView(): boolean {
    return this.view === PollBlockView.default;
  }

  get isRegularView(): boolean {
    return this.view === PollBlockView.regular;
  }

  get languageCode(): string {
    return this.userRepo.languageCode;
  }

  get displayedDate(): string {
    const currentDate = new Date(this.poll.created);
    const { invalidDate, ago, now, yesterday } = this.textAttributes;

    if (!isValid(currentDate)) {
      return invalidDate;
    }

    const quantityDifferenceInMinutes = differenceInMinutes(new Date(), currentDate);
    const quantityDifferenceInHours = differenceInHours(new Date(), currentDate);

    const formatDistanceOfCurrentDate = formatDistance(currentDate, new Date(), {
      addSuffix: true,
      locale: getDateFnsLocale(this.languageCode)
    });

    const isCurrentDateOfYesterday = isYesterday(currentDate);
    const isCurrentDateOfHours = quantityDifferenceInHours >= 1 && quantityDifferenceInHours < 24;

    if (quantityDifferenceInMinutes === 0) {
      return now;
    }

    if (isCurrentDateOfYesterday) {
      return yesterday;
    }

    if (isCurrentDateOfHours) {
      return `${this.formattedPluralTitleByDate(quantityDifferenceInHours)} ${ago}`;
    }

    return formatDistanceOfCurrentDate;
  }

  formattedPluralTitleByDate(hours: number): string {
    const wordVariants = ['час', 'часа', 'часов'];
    const variableName = 'HOURS_NUMBER_VAR';
    const wordPlural = this.pluralizeChoice(hours, wordVariants, variableName);

    return wordPlural;
  }

  open(): void {
    void this.$router.push(getPollIdRoute(String(this.poll.id)));
  }
}
