# Frontend

## Запуск проекта
``` bash
# установить зависимости, используется ярн2
$ yarn

# разработка с авто-обновлением - `localhost:3000`
$ yarn dev

# продакшн-сборка и ее запуск
$ yarn build
$ yarn start

# генерация статичного проекта
$ yarn generate

# генерация статичного сторибука
$ yarn build-storybook
```


## Demo
https://front-master-appgo.beta-izex.ru/

user: 123123

## Demo storybook
https://front-storybook-appgo.beta-izex.ru/

user: 123123

## Для локальной разработки с использованием https:
* Добавить `127.0.0.1 dev.appgo.ru` в `/etc/hosts/`
* Переопределить `USE_LOCAL_CERTIFICATE`

## `.env`
`USE_FAKE_BACKEND` - Определяет использование реального\фейкового бекенда

`LINT_ON_BUILD` - Определяет использование линтера при локальной разработки

`USE_HTTPS` - Определяет протокол запросов к API

`API_URL` - Определяет базовый URL к API (https://axios.nuxtjs.org/options#baseurl).

`USE_LOCAL_CERTIFICATE` - Определяет использование сертификатов для локальной разработки

`RESPOND_MOCK_RESULT_DELAY` - Определяет задержку запросов при использовании метода `respondMockResult`

При необходимости можно переопределить значения в `.env.local` и пересобрать проект, чтобы накст увидел изменения

## Проектные сервисы
Сервисы доступы глобально через `this.$projectServices` или `$projectServices` в asyncData,
их св-ва можно посмотреть в `shared/repository/repo.ts`

Провайды сервисов и Vuex в для сторибука и для тестов внедряются глобально в `.storybook/preview.js` и `cypress/support/index`

## Использование стора
* В компонентах: через `this.$projectServices.*Repo`
* В сторибуке и тестах: через экспорт переменных `*Repo` из `shared/repository/fake-services-factory.ts`
* Только для тестов: в провайд стора идет `fakeStore` из `shared/repository/fake-services-factory.ts`, в сторибуке добавлен глобально

## SCSS
* Для короткой записи БЭМ-элементов в шаблонах и стилях в проект добавлен плагин `vue-bem-cn`,
есть [документация](https://github.com/c01nd01r/vue-bem-cn)

## Axios
* Для проекта доступен глобальный полноэкранный лоадер, активируется на уровне запроса, пример использования: `this.$axios.get('url',  { showLoader: true })`
