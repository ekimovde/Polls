import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'shared-modal-uploader';

export enum SharedModalUploaderTextAttribute {
  addImage = 'Добавьте изображение',
  labelSearch = 'Выберите что-нибудь',
  placeholder = 'ищите слова на английском, например "gorilla"'
}

export enum SharedModalUploaderTestLocator {
  //
}

export const dtSharedModalUploader = getTestSelectors(COMPONENT_NAME, SharedModalUploaderTestLocator);
