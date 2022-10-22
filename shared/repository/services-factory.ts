import { Context } from '@nuxt/types';
import { getModule } from 'vuex-module-decorators';
import { FakeRepo } from './fake-repo';
import { HttpRepo } from './http-repo';
import { ProjectServices } from './repo';
import { UrlGenerator } from './url-generator';
import UserModuleState from '~/store/modules/user';
import LoaderModuleStore from '~/store/modules/loader';
import NotificationModuleState from '~/store/modules/notification';
import HeaderModuleState from '~/store/modules/header';
import FooterModuleState from '~/store/modules/footer';
import { FakeTranslator } from '../services/translator/fake-translator';
import { Translator } from '../services/translator';
import { TranslationsUpdater } from '../services/translations-updater';
import { GlobalNotification } from '../services/notification';

export default function createProjectServices(context: Context): ProjectServices {
  const { $axios, store } = context;

  const projectUrlGenerator = new UrlGenerator();

  const projectRepository = USE_FAKE_BACKEND ? FakeRepo.create() : new HttpRepo($axios, projectUrlGenerator, store);
  const translator = USE_FAKE_BACKEND ? FakeTranslator.create() : new Translator(projectRepository);

  const translationsUpdater = new TranslationsUpdater(translator, projectRepository);

  const userRepo = getModule(UserModuleState, store);
  const loaderRepo = getModule(LoaderModuleStore, store);
  const notificationRepo = getModule(NotificationModuleState, store);
  const headerRepo = getModule(HeaderModuleState, store);
  const footerRepo = getModule(FooterModuleState, store);

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
    footerRepo
  };
}
