import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { isEmpty } from 'lodash';
import { COMPONENT_NAME, PollVoteResultTextAttribute, PollVoteResultTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiProgress } from '~/components/ui';
import { UiProgressView } from '~/components/ui/progress/component';
import { SharedBadge } from '~/components/shared';
import { SharedBadgeSize } from '~/components/shared/badge/component';
import { SharedColorTheme } from '~/components/shared/color/component';
import { PollVoteResults, PollQuestionAnswer } from '../../model';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiProgress,
    SharedBadge
  }
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: Object,
    default: () => ({})
  }) readonly pollVoteResults: PollVoteResults;

  @Prop({
    type: String,
    validator: val => Object.values(SharedColorTheme).includes(val),
    default: SharedColorTheme.blue
  }) readonly color: SharedColorTheme;

  readonly textAttributes = PollVoteResultTextAttribute;
  readonly testLocators = PollVoteResultTestLocator;

  readonly userRepo = this.$projectServices.userRepo;

  readonly uiProgressView = UiProgressView;

  readonly sharedBadgeSize = SharedBadgeSize;

  readonly sharedColorTheme = SharedColorTheme;

  get hasPollVoteResults(): boolean {
    return !isEmpty(this.pollVoteResults);
  }

  get userId(): number {
    return this.userRepo.user?.id;
  }

  get answers(): PollQuestionAnswer[] {
    if (!this.hasPollVoteResults) {
      return [];
    }

    return this.pollVoteResults.answers;
  }

  isMyAnswer(timestamp: number): boolean {
    return this.pollVoteResults.selectedAnswer === timestamp;
  }

  getProgress(timestamp: number): number {
    return this.pollVoteResults.progress[timestamp];
  }

  getDisplayedProgress(timestamp: number): string {
    return `${this.getProgress(timestamp)}%`;
  }
}
