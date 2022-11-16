import { Component, mixins, Prop, Watch } from 'nuxt-property-decorator';
import { debounce } from 'lodash';
import { COMPONENT_NAME, SharedModalUploaderTextAttribute, SharedModalUploaderTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { uiModal, uiInput, uiButton } from '~/components/ui';
import { UiInputView, UiInputSize } from '~/components/ui/input/component';
import { UiModalView } from '~/components/ui/modal/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { UnsplashPhotoResponse, UnsplashPhotoRequest } from '~/shared/repository/repo';

enum SharedModalUploaderEvent {
  close = 'update:is-visible',
  choose = 'choose'
}

const INITIAL_PAGE = 0;
const DEFAULT_COUNT_TO_ADDING_PAGE = 1;

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

  photos: UnsplashPhotoResponse[] = [];

  search = '';
  debouncedSearch = null;

  requestOprions: UnsplashPhotoRequest = {
    page: INITIAL_PAGE
  }

  get hasSearchValue(): boolean {
    return Boolean(this.search.length);
  }

  async getPhotos(): Promise<void> {
    try {
      this.isLoading = true;

      void this.updateRequestOprions();

      if (this.hasSearchValue) {
        await this.searchUnsplashPhotos();
        return;
      }

      await this.getUnsplashPhotos();
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }

  async getUnsplashPhotos(): Promise<void> {
    const photos = await this.projectRepository.getUnsplashPhotos(this.requestOprions);

    void this.updatePhotos(photos);
  }

  async searchUnsplashPhotos(): Promise<void> {
    const photos = await this.projectRepository.searchUnsplashPhotos({ ...this.requestOprions, search: this.search });

    void this.updatePhotos(photos);
  }

  createDebouncedUnsplashRequest(): void {
    this.debouncedSearch = debounce(async (value) => {
      this.search = value;
      void this.resetRequestOprions(false);

      if (!this.hasSearchValue) {
        await this.getUnsplashPhotos();
        return;
      }

      await this.searchUnsplashPhotos();
    }, 500);
  }

  updateRequestOprions(): void {
    this.requestOprions.page += DEFAULT_COUNT_TO_ADDING_PAGE;
  }

  updatePhotos(photos: UnsplashPhotoResponse[]): void {
    this.photos = [...this.photos, ...photos];
  }

  close(): void {
    void this.$emit(SharedModalUploaderEvent.close, false);
  }

  choose(url: string): void {
    void this.$emit(SharedModalUploaderEvent.choose, url);
    void this.close();
  }

  input(value: string): void {
    this.debouncedSearch(value);
  }

  resetRequestOprions(haveImageReset = true): void {
    this.photos = [];
    this.requestOprions.page = INITIAL_PAGE;

    if (haveImageReset) {
      this.search = '';
    }
  }

  @Watch('isVisible')
  async changeVisible(isVisible: boolean): Promise<void> {
    if (isVisible) {
      void this.createDebouncedUnsplashRequest();
      await this.getUnsplashPhotos();

      return;
    }

    void this.resetRequestOprions();
  }
}
