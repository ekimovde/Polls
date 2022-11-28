import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, PollVoteInfoTextAttribute, PollVoteInfoTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { AvatarBlock } from '~/components/avatar';
import { AvatarBlockSize } from '~/components/avatar/component';
import { PollQuestion } from '../../question';

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
  }) readonly question: PollQuestion;

  readonly textAttributes = this.transAll(PollVoteInfoTextAttribute);
  readonly testLocators = PollVoteInfoTestLocator;

  readonly avatarBlockSize = AvatarBlockSize;

  get displayedTotalVotes(): string {
    return `${this.textAttributes.totalVotes} ${25}`;
  }

  get displayedTimeLeft(): string {
    return `${5} Days Left`;
  }
}
