import { Translation, Translator } from './index';
import { FakeRepo } from '~/shared/repository/fake-repo';
import { consoleLogMethodCalls } from '~/shared/utils/unit-test/console-log-method-calls';

const projectRepository = consoleLogMethodCalls(new FakeRepo());

const expectedTranslations: Translation[] = [
  {
    hash: '7309dbf3749456a6e5a19f82d3bffdd4',
    text: 'Session not found'
  },
  {
    hash: '830d2c41848f131c2c53e237472e3c16',
    text: 'Order number: ORDER_ID_VAR'
  },
  {
    hash: '5852102a3cfc0b6ac432c00dea5131db',
    text: 'In the branches: BAC_STATUS_VAR.BAC_INFO_VAR'
  }
];

xdescribe(Translator.name, () => {
  let translator: Translator;

  beforeEach(() => {
    translator = new Translator(projectRepository);

    translator.setTranslations(expectedTranslations);
  });

  it('отдает перевод для предоставленной фразы без параметров', () => {
    expect(translator.trans('Сессия не найдена.')).eq('Session not found');
  });

  it('в случае если в словаре нет перевода - вернет undefined', () => {
    expect(translator.trans('Нет перевода')).eq('undefined');
  });

  describe('отдает перевод с подстановкой параметров', () => {
    it('для фразы с 1 параметром', () => {
      expect(translator.trans('Номер заказа: ORDER_ID_VAR', { ORDER_ID_VAR: '12345' }))
        .eq('Order number: 12345');
    });

    it('для фразы с несколькими параметрами', () => {
      expect(translator.trans('В ветках: BAC_STATUS_VAR.BAC_INFO_VAR', {
        BAC_STATUS_VAR: '123',
        BAC_INFO_VAR: '456'
      }))
        .eq('In the branches: 123.456');
    });
  });

  it('переводы в трансляторе можно обновить после создания транслятора', () => {
    translator.setTranslations([]);

    expect(translator.trans('Сессия не найдена.')).eq('undefined');
  });
});
