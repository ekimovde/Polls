import { Translation } from '../services/translator';

export interface TranslationRepo {
  getAllTranslations(): Promise<Translation[]>
}
