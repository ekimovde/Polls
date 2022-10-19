import { TranslationsUpdater } from '~/shared/services/translations-updater';
import { Translator } from '~/shared/services/translator';
import { translationsResponse } from '~/shared/repository/fixtures/translations';
import { FakeRepo } from '~/shared/repository/fake-repo';
import { consoleLogMethodCalls } from '~/shared/utils/unit-test/console-log-method-calls';

const projectRepo = consoleLogMethodCalls(new FakeRepo());

describe(TranslationsUpdater.name, () => {
  it('обновляет переводы в трансляторе', async () => {
    const translator = new Translator(projectRepo);

    cy.spy(translator, 'setTranslations').as('setTranslationsCall');
    cy.spy(projectRepo, 'getTranslationList').as('getTranslationList');

    const updater = new TranslationsUpdater(translator, projectRepo);

    await updater.updateTranslations();

    const expectedTranslationsToSet = translationsResponse;

    cy.get('@setTranslationsCall').should('have.been.calledWithExactly', expectedTranslationsToSet);
  });
});
