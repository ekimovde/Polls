import { Component, Vue } from 'nuxt-property-decorator';
import mapValues from 'lodash/mapValues';

@Component
export default class TestId extends Vue {
  tid(elementName?: string): string {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return tid(this.$options.name.toLowerCase(), elementName);
  }
}

export function tid(block: string, element?: string): string {
  if (!block) {
    throw new Error('Параметр "block" обязателен');
  }

  if (element) {
    return `${block}-${element}`;
  }

  return block;
}

function createTestLocatorsFactory(block: string) {
  return (element = ''): string => {
    const testId = tid(block, element);
    return `[data-test=${testId}]`;
  };
}

export function getTestSelectors<T extends TestLocator>(block: string, selectors?: T): TestSelectors<T> {
  const testLocatorsFactory = createTestLocatorsFactory(block);

  const blockSelector = {
    block: testLocatorsFactory()
  };

  if (!selectors) {
    return blockSelector;
  }

  const mappedSelectors = mapValues(selectors, (value: string) => testLocatorsFactory(value));

  return { ...blockSelector, ...mappedSelectors };
}

type TestLocator = Record<string, string>;

type Selectors<T> = {
  [P in keyof T]?: string
};

type TestSelectors<T> = {block: string} & Selectors<T>
