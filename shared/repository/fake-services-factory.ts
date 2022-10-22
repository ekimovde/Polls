import { getModule } from 'vuex-module-decorators';
import store from '~/store';
import UserModuleState from '~/store/modules/user';
import { FakeRepo } from './fake-repo';
import { ProjectServices } from './repo';
import { UrlGenerator } from './url-generator';
import LoaderModuleStore from '~/store/modules/loader';
import { FakeTranslator } from '../services/translator/fake-translator';
import { TranslationsUpdater } from '../services/translations-updater';
import { GlobalNotification } from '../services/notification';
import NotificationModuleState from '~/store/modules/notification';
import HeaderModuleState from '~/store/modules/header';
import FooterModuleState from '~/store/modules/footer';

export const fakeStore = store();

export const { userRepo, notification, projectRepository } = createFakeServices();

export default function createFakeServices(params: Partial<ProjectServices> = {}): ProjectServices {
  const projectUrlGenerator = new UrlGenerator();

  const projectRepository = FakeRepo.create();
  const translator = FakeTranslator.create();

  const translationsUpdater = new TranslationsUpdater(translator, projectRepository);

  const userRepo = getModule(UserModuleState, fakeStore);
  const loaderRepo = getModule(LoaderModuleStore, fakeStore);
  const notificationRepo = getModule(NotificationModuleState, fakeStore);
  const headerRepo = getModule(HeaderModuleState, fakeStore);
  const footerRepo = getModule(FooterModuleState, fakeStore);

  const notification = new GlobalNotification(notificationRepo);

  return {
    projectUrlGenerator,
    projectRepository,
    translator,
    translationsUpdater,
    userRepo,
    loaderRepo,
    notificationRepo,
    notification,
    headerRepo,
    footerRepo,
    ...params
  };
}
