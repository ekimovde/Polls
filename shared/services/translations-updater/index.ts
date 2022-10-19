import { TranslatorType } from '../translator';
import { ProjectRepository } from '~/shared/repository/repo';

export class TranslationsUpdater {
  constructor(
    private readonly translator: TranslatorType,
    private readonly projectRepository: ProjectRepository
  ) {}

  async updateTranslations(): Promise<void> {
    const translations = await this.projectRepository.getTranslationList();

    this.translator.setTranslations(translations);
  }
}
