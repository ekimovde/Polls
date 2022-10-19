import { TranslatorType, Translation, TextAttributes, TextValues } from './index';

export class FakeTranslator implements TranslatorType {
  private translations: Translation[] = [];

  static create(): TranslatorType {
    return new FakeTranslator();
  }

  setTranslations(translations: Translation[]): void {
    this.translations = translations;
  }

  trans(key: string): string {
    return key;
  }

  transAll<T extends TextAttributes>(values: T): TextValues<T> {
    return values;
  }
}
