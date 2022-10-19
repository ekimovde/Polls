import { mount } from '@cypress/vue';
import { getComponentName } from '~/shared/utils/unit-test/get-component-name';
import { NotificationSuccess, dtNotification } from './attributes';
import { Notification } from './index';
import cypressExtensions from '~/shared/utils/unit-test/cypress-extensions';
import { fakeStore, notification } from '~/shared/repository/fake-services-factory';

describe(getComponentName(Notification), () => {
  let page: ComponentPageObject;

  beforeEach(() => {
    page = create();
  });

  it('компонент инициализируется', () => {
    page.wrapper.should('exist');
  });

  it('Уведомление показывается, содержит иконку, заголовок и описание', () => {
    notification.showSuccess();

    page.wrapper.should('be.visible');
    page.icon.should('be.visible');

    page.title
      .should('be.visible')
      .contains(NotificationSuccess.defaultTitle);

    page.message
      .should('be.visible')
      .contains(NotificationSuccess.defaultMessage);
  });
});

class ComponentPageObject {
  get wrapper() {
    return cy.get(dtNotification.block);
  }

  get icon() {
    return cy.get(dtNotification.icon);
  }

  get title() {
    return cy.get(dtNotification.title);
  }

  get message() {
    return cy.get(dtNotification.message);
  }
}

function create() {
  mount(Notification, {
    store: fakeStore,
    ...cypressExtensions()
  });

  return new ComponentPageObject();
}
