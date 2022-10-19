/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MD5 } from 'crypto-js';
import isEmpty from 'lodash/isEmpty';
import mapValues from 'lodash/mapValues';
import { ProjectRepository } from '~/shared/repository/repo';

export class Translator implements TranslatorType {
  constructor(
    private readonly projectRepository: ProjectRepository
  ) { }

  private translations: Translation[] = [];

  setTranslations(translations: Translation[]): void {
    this.translations = translations;
  }

  trans(key: string, params: Record<string, string> = {}): string {
    if (!key) {
      return null;
    }

    const translation = this.getTranslation(key);

    if (!translation) {
      const wordWithoutPunctuation = key.replace(/[^a-zA-Zа-яёА-ЯЁ]/g, '');

      if (/^[a-z]*$/i.test(wordWithoutPunctuation)) {
        return key;
      }

      void this.getNewTranslation(key);

      return 'undefined';
    }

    return this.applyParamsToTranslation(translation.text, params);
  }

  transAll<T extends TextAttributes>(values: T): TextValues<T> {
    return mapValues(values, (value: string) => this.trans(value));
  }

  private getTranslation(key: string): Translation {
    const hash = MD5(key).toString();

    return this.translations.find(item => item.hash === hash);
  }

  private async getNewTranslation(text: string): Promise<void> {
    void this.projectRepository.getTranslation({ text });
  }

  private applyParamsToTranslation(translation: string, params: Record<string, string> = {}): string {
    if (isEmpty(params)) {
      return translation;
    }

    let translationWithParams = translation;

    Object.entries(params).forEach(([paramKey, paramValue]) => {
      translationWithParams = translationWithParams.replace(paramKey, paramValue);
    });

    return translationWithParams;
  }
}

export interface TranslatorType {
  setTranslations(translations: Translation[]): void
  trans(key: string, params: Record<string, string>): string
  transAll<T extends TextAttributes>(values: T): TextValues<T>
}

export interface Translation {
  hash: string
  text: string
}

export type TextAttributes = Record<string, string>;

export type TextValues<T> = {
  [P in keyof T]?: string
}
