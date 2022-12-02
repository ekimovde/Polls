import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { isEmpty } from 'lodash';
import { COMPONENT_NAME, PollVoteInfoTextAttribute, PollVoteInfoTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { AvatarBlock } from '~/components/avatar';
import { AvatarBlockSize } from '~/components/avatar/component';
import { PollVoteResults } from '../../model';

export const DEFAULT_INITIAL_QUANTITY = 0;
export const DEFAULT_QUANTITY = 3;

@Component({
  name: COMPONENT_NAME,
  components: {
    AvatarBlock
  }
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: Object,
    default: () => ({})
  }) readonly pollVoteResults: PollVoteResults;

  readonly textAttributes = PollVoteInfoTextAttribute;
  readonly testLocators = PollVoteInfoTestLocator;

  readonly avatarBlockSize = AvatarBlockSize;

  get hasPollVoteResults(): boolean {
    return !isEmpty(this.pollVoteResults);
  }

  get hasAvatars(): boolean {
    return Boolean(this.avatars.length);
  }

  get avatars(): string[] {
    if (!this.hasPollVoteResults) {
      return [];
    }

    return this.pollVoteResults.users.map(item => item.avatar)
      .slice(DEFAULT_INITIAL_QUANTITY, DEFAULT_QUANTITY);
  }

  get displayedTotalVotes(): string {
    const total = this.hasPollVoteResults ? this.pollVoteResults.total : DEFAULT_INITIAL_QUANTITY;
    return `${this.textAttributes.totalVotes} ${total}`;
  }
}
