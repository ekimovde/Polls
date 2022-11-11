import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, PollAnswerTextAttribute, PollAnswerTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiInput, uiTooltip } from '~/components/ui';
import { UiInputView, UiInputSize } from '~/components/ui/input/component';
import { PollQuestionAnswer, PollQuestionTypes } from '../model';
import { UiTooltipPlacement } from '~/components/ui/tooltip/component';

enum PollAnswerIcon {
  default = 'bx bxs-image',
  emoji = 'bx bx-smile',
  plus = 'bx bx-plus',
  remove = 'bx bx-x'
}

enum PollAnswerView {
  default = 'default',
  regular = 'regular'
}

enum PollAnswerViewEvent {
  update = 'update'
}

enum PollAnswerViewTooltipContent {
  image = '360x480 px',
  imageText = '1012x818 px',
  emoji = 'Добавить эмоджи'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    uiInput,
    uiTooltip
  }
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: Object,
    default: () => ({})
  }) readonly answer: PollQuestionAnswer

  readonly textAttributes = PollAnswerTextAttribute;
  readonly testLocators = PollAnswerTestLocator;

  readonly uiInputView = UiInputView;
  readonly uiInputSize = UiInputSize;

  readonly uiTooltipPlacement = UiTooltipPlacement;

  get isTextType(): boolean {
    return this.answer.type === PollQuestionTypes.text;
  }

  get isEmojiType(): boolean {
    return this.answer.type === PollQuestionTypes.emoji;
  }

  get hasImage(): boolean {
    return Boolean(this.answer.image);
  }

  get hasEmoji(): boolean {
    return Boolean(this.answer.emoji);
  }

  get view(): PollAnswerView {
    return this.hasImage || this.hasEmoji
      ? PollAnswerView.default
      : PollAnswerView.regular;
  }

  get classForIcon(): PollAnswerIcon {
    return this.isEmojiType ? PollAnswerIcon.emoji : PollAnswerIcon.default;
  }

  get classForActionIcon(): PollAnswerIcon {
    return this.hasImage || this.hasEmoji
      ? PollAnswerIcon.remove
      : PollAnswerIcon.plus;
  }

  get contentForTooltip(): PollAnswerViewTooltipContent {
    let content = PollAnswerViewTooltipContent.image;

    switch (this.answer.type) {
      case PollQuestionTypes.imageText:
        content = PollAnswerViewTooltipContent.imageText;
        break;
      case PollQuestionTypes.emoji:
        content = PollAnswerViewTooltipContent.emoji;
        break;
    }

    return content;
  }

  updateText(text: string): void {
    this.$emit(PollAnswerViewEvent.update, { ...this.answer, text });
  }
}
