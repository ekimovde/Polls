import { mount } from '@cypress/vue';
import Vue from 'vue';
import { getComponentName } from '~/shared/utils/unit-test/get-component-name';
import { Translatable } from '.';

describe(getComponentName(Translatable), () => {
  it('передает транслятору параметры переданные функции trans', () => {
    const expectedKey = 'key';
    const expectedParams = { param: 'value' };

    cy.spy(Vue.prototype.$projectServices.translator, 'trans').as('translatorCall');

    mount(Translatable);

    cy.wait(100).then(() => {
      (<Translatable>Cypress.vueWrapper.vm).trans(expectedKey, expectedParams);

      cy.get('@translatorCall').should('have.been.calledWithExactly', expectedKey, expectedParams);
    });
  });
});
