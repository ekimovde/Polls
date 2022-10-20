import { BaseSelectOption } from '~/shared/repository/constants';

export const selectOption = (params: Partial<BaseSelectOption> = {}): BaseSelectOption => {
  return {
    label: 'All',
    value: 'all',
    ...params
  };
};

export const selectOptions = (): BaseSelectOption[] => {
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
