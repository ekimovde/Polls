import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { isEmpty } from 'lodash';
import { COMPONENT_NAME, PollQuestionImageUploaderTextAttribute, PollQuestionImageUploaderTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { SharedModalUploader } from '~/components/shared';

enum PollQuestionImageUploaderEvent {
  update = 'update:own-image',
  choose = 'choose'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton,
    SharedModalUploader
  }
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: String,
    default: null
  }) readonly ownImage: string;

  readonly textAttributes = PollQuestionImageUploaderTextAttribute;
  readonly testLocators = PollQuestionImageUploaderTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  isVisible = false;

  get isOwnImageEmpty(): boolean {
    return isEmpty(this.ownImage);
  }

  toggleVisible(): void {
    this.isVisible = !this.isVisible;
  }

  choose(image: string): void {
    void this.$emit(PollQuestionImageUploaderEvent.update, image);
    void this.$emit(PollQuestionImageUploaderEvent.choose, image);
  }

  remove(): void {
    void this.choose(null);
  }
}
