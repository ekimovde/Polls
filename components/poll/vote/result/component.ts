import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { isEmpty } from 'lodash';
import { COMPONENT_NAME, PollVoteResultTextAttribute, PollVoteResultTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiProgress } from '~/components/ui';
import { UiProgressTheme, UiProgressView } from '~/components/ui/progress/component';
import { SharedBadge } from '~/components/shared';
import { SharedBadgeSize } from '~/components/shared/badge/component';
import { SharedColorTheme } from '~/components/shared/color/component';
import { PollVoteParams, PollVoteAnswer, PollAuthor } from '../../model';

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
  }) readonly vote: PollVoteParams;

  readonly textAttributes = PollVoteResultTextAttribute;
  readonly testLocators = PollVoteResultTestLocator;

  readonly userRepo = this.$projectServices.userRepo;

  readonly uiProgressTheme = UiProgressTheme;
  readonly uiProgressView = UiProgressView;

  readonly sharedBadgeSize = SharedBadgeSize;

  readonly sharedColorTheme = SharedColorTheme;

  get hasVote(): boolean {
    return !isEmpty(this.vote);
  }

  get userId(): number {
    return this.userRepo.user?.id;
  }

  get answers(): PollVoteAnswer[] {
    if (!this.hasVote) {
      return [];
    }

    return this.vote.answers;
  }

  isMyAnswer(authors: PollAuthor[]): boolean {
    return authors.map(item => item.id).includes(this.userId);
  }

  getDisplayedProgress(timestamp: number): string {
    return `${this.vote.progress[timestamp]}%`;
  }
}
