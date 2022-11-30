import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, UploadPictureTextAttribute, UploadPictureTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { SharedModalUploader } from '~/components/shared';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '../ui/button/component';

enum UploadPictureEvent {
  update = 'update:avatar'
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
    default: ''
  }) readonly avatar: string;

  readonly textAttributes = UploadPictureTextAttribute;
  readonly testLocators = UploadPictureTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  isVisible = false;

  open(): void {
    this.isVisible = true;
  }

  chooseAvatar(image: string): void {
    void this.$emit(UploadPictureEvent.update, image);
  }

  replaceByDefault(event: Event): void {
    (event.target as HTMLImageElement).src = require('@assets/images/avatar-placeholder.jpg');
  }
}
