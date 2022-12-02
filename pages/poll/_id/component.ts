import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, PollIdPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton, uiDropdown, uiModal, uiTooltip } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { AvatarBlock } from '~/components/avatar';
import { TabLinks } from '~/components/tab-links';
import { AvatarBlockSize } from '~/components/avatar/component';
import { getPollSettingsIdRoute } from '~/shared/repository/routes/poll';
import { pollSettingsDropdownList } from '~/static-data/dropdown/factory';
import { DropdownItemTypeBase } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { PollResponse, PollMembersResponse } from '~/shared/repository/repo';
import { UiTooltipPlacement } from '~/components/ui/tooltip/component';
import { PollVote } from '~/components/poll/vote';
import { PollQuestionResponse, PollQuestionAnswer, PollVoteResults } from '~/components/poll/model';

@Component({
  name: COMPONENT_NAME,
  components: {
    AvatarBlock,
    TabLinks,
    PollVote,
    uiButton,
    uiDropdown,
    uiModal,
    uiTooltip
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = PollIdPagePageTextAttribute;

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly notifier = this.$projectServices.notification;
  readonly userRepo = this.$projectServices.userRepo;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly avatarBlockSize = AvatarBlockSize;

  readonly uiTooltipPlacement = UiTooltipPlacement;

  readonly dropdownList = pollSettingsDropdownList();

  poll: PollResponse = null;
  pollVoteResults: PollVoteResults = null;
  pollMembers: PollMembersResponse[] = [];

  isLoading = false;
  isVoteLoading = false;
  isRemoveLoading = false;
  isEndPollLoading = false;

  isVisible = false;
  isModalVisible = false;
  isModalVoteVisible = false;

  get id(): string {
    return this.$route.params.id;
  }

  get userId(): number {
    return this.userRepo.user?.id;
  }

  get isSettingsButtonShown(): boolean {
    return this.userId === this.poll?.userId;
  }

  get hasPoll(): boolean {
    return Boolean(this.poll);
  }

  get fullNameByAuthor(): string {
    return this.poll?.author.fullName;
  }

  get avatarByAuthor(): string {
    return this.poll?.author.avatar;
  }

  get pollSettingsIdRoute(): Partial<Route> {
    return getPollSettingsIdRoute(this.id);
  }

  get question(): PollQuestionResponse {
    if (!this.hasPoll) {
      return null;
    }

    return this.poll.question;
  }

  get formattedPluralByPeoples(): string {
    const wordVariants = ['человек', 'человека', 'человеков'];
    const variableName = 'MEMBERS_NUMBER_VAR';
    const quantityOfPollMembers = this.pollMembers.length;
    const wordPlural = this.pluralizeChoice(quantityOfPollMembers, wordVariants, variableName);

    return wordPlural.replace(variableName, String(quantityOfPollMembers));
  }

  get displayedDescription(): string {
    return `${this.textAttributes.description} ${this.formattedPluralByPeoples}`;
  }

  async created(): Promise<void> {
    try {
      this.isLoading = true;

      await this.getPoll();
      await this.getPollVoteResults();
      await this.getPollMembers();
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }

  async getPoll(): Promise<void> {
    this.poll = await this.projectRepository.getPoll(this.id);
  }

  async getPollVoteResults(): Promise<void> {
    this.pollVoteResults = await this.projectRepository.getPollVoteResults(String(this.poll.id));
  }

  async getPollMembers(): Promise<void> {
    this.pollMembers = await this.projectRepository.getPollMembers(this.id);
  }

  async remove(): Promise<void> {
    try {
      this.isRemoveLoading = true;

      await this.projectRepository.removePoll(this.id);
      void this.$router.push({ name: RoutesName.polls });
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isRemoveLoading = false;
      this.isModalVisible = false;
    }
  }

  async endPoll(): Promise<void> {
    try {
      this.isEndPollLoading = true;

      await this.projectRepository.endPoll(this.id);
      await this.getPoll();
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isEndPollLoading = false;
      this.isModalVoteVisible = false;
    }
  }

  async vote(selectAnswer: PollQuestionAnswer): Promise<void> {
    try {
      const { text, timestamp } = selectAnswer;

      this.isVoteLoading = true;

      await this.projectRepository.setVoteInPoll({
        pollId: this.poll?.id,
        text,
        timestamp
      });
      await this.getPollVoteResults();
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isVoteLoading = false;
    }
  }

  toggleVisible(): void {
    this.isVisible = !this.isVisible;
  }

  open(route: Route, type: DropdownItemTypeBase): void {
    this.isVisible = false;

    switch (type) {
      case DropdownItemTypeBase.regular:
        this.isModalVisible = true;
        return;
      case DropdownItemTypeBase.extra:
        this.isModalVoteVisible = true;
        return;
    }

    void this.$router.push({ name: route.name, params: { id: this.id } });
  }
}
