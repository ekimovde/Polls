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

export const selectOptionsWithDateYears = (): SelectOptionBase[] => {
  return (new Array(4).fill(null) as SelectOptionBase[]).map((_, index) => {
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();
    const currentValue = new Date(currentYear + index, currentMonth).getFullYear();

    return selectOption({
      label: String(currentValue),
      value: currentValue
    });
  });
};

export const selectOptionsWithDateMonths = (): SelectOptionBase[] => {
  return (new Array(12).fill(null) as SelectOptionBase[]).map((_, index) => {
    const currentValue = index + 1;

    return selectOption({
      label: String(currentValue),
      value: currentValue
    });
  });
};

export const selectOptionsWithDateDays = (): SelectOptionBase[] => {
  return (new Array(28).fill(null) as SelectOptionBase[]).map((_, index) => {
    const currentValue = index + 1;

    return selectOption({
      label: String(currentValue),
      value: currentValue
    });
  });
};

export const selectOptionsWithTimeHours = (): SelectOptionBase[] => {
  return (new Array(12).fill(null) as SelectOptionBase[]).map((_, index) => {
    const currentValue = index + 1;

    return selectOption({
      label: String(currentValue),
      value: currentValue
    });
  });
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
