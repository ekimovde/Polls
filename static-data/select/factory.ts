import { SelectOptionBase } from '~/shared/repository/constants';
import { SharedColorTheme } from '~/components/shared/color/component';
import { getArrayWithSelectOption } from '~/shared/utils/get-array-with-select-options';

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
      label: 'PinkLight',
      value: SharedColorTheme.pinkLight
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

export const selectOptionsWithDateMonths = (): SelectOptionBase[] => {
  return getArrayWithSelectOption(12);
};

export const selectOptionsWithDateDays = (): SelectOptionBase[] => {
  return getArrayWithSelectOption(28);
};

export const selectOptionsWithTimeHours = (): SelectOptionBase[] => {
  return getArrayWithSelectOption(12);
};

export const selectOptionsWithTimeMinutes = (): SelectOptionBase[] => {
  return [
    selectOption({
      label: '00',
      value: 0
    }),
    selectOption({
      label: '15',
      value: 15
    }),
    selectOption({
      label: '30',
      value: 30
    }),
    selectOption({
      label: '45',
      value: 45
    })
  ];
};
