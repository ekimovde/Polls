import { SelectOptionBase } from '~/shared/repository/constants';

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
