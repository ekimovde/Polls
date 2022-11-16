import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, SharedModalUploaderTextAttribute, SharedModalUploaderTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { uiModal, uiInput, uiButton } from '~/components/ui';
import { UiInputView, UiInputSize } from '~/components/ui/input/component';
import { UiModalView } from '~/components/ui/modal/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiModal,
    uiInput,
    uiButton
  }
})
export default class extends mixins(TestId) {
  @Prop({
    type: Boolean,
    default: false
  }) readonly isVisible: boolean;

  readonly textAttributes = SharedModalUploaderTextAttribute;
  readonly testLocators = SharedModalUploaderTestLocator;

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly notifier = this.$projectServices.notification;

  readonly uiInputView = UiInputView;
  readonly uiInputSize = UiInputSize;

  readonly uiModalView = UiModalView;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  isLoading = false;

  photos = [
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODAyMzh8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTY2ODU1Njc2Ng&ixlib=rb-4.0.3&q=80',
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODAyMzh8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTY2ODU1Njc2Ng&ixlib=rb-4.0.3&q=80',
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODAyMzh8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTY2ODU1Njc2Ng&ixlib=rb-4.0.3&q=80',
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODAyMzh8MHwxfHNlYXJjaHwxfHxjYXR8ZW58MHwwfHx8MTY2ODU1Njc2Ng&ixlib=rb-4.0.3&q=80'
  ];

  search = '';

  async created(): Promise<void> {
    try {
      this.isLoading = true;

      await this.getUnsplashPhotos();
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }

  async getUnsplashPhotos(): Promise<void> {
    await this.projectRepository.getUnsplashPhotos();
  }
}
