import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'upload-picture';

export enum UploadPictureTextAttribute {
  title = 'Загрузить фото',
  description = 'Минимум 256px x 256px'
}

export enum UploadPictureTestLocator {
  //
}

export const dtUploadPicture = getTestSelectors(COMPONENT_NAME, UploadPictureTestLocator);
