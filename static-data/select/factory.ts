import { SelectOptionBase } from '~/shared/repository/constants';
import { SharedColorTheme } from '~/components/shared/color/component';

export const selectOption = (params: Partial<SelectOptionBase> = {}): SelectOptionBase => {
  return {
    label: 'All',
    value: 'all',
    ...params
  };
};

export const selectOptions = (): SelectOptionBase[] => {
  return [
    selectOption(),
    selectOption({
      label: 'Public',
      value: 'public'
    }),
    selectOption({
      label: 'Forks',
      value: 'forks'
    })
  ];
};

export const selectOptionsWithColors = (): SelectOptionBase[] => {
  return [
    selectOption({
      label: 'Purple',
      value: SharedColorTheme.purple
    }),
    selectOption({
      label: 'Orange',
      value: SharedColorTheme.orange
    }),
    selectOption({
      label: 'Green',
      value: SharedColorTheme.green
    }),
    selectOption({
      label: 'Red',
      value: SharedColorTheme.red
    }),
    selectOption({
      label: 'Pink',
      value: SharedColorTheme.pink
    }),
    selectOption({
      label: 'Blue',
      value: SharedColorTheme.blue
    }),
    selectOption({
      label: 'Grey',
      value: SharedColorTheme.grey
    })
  ];
};
