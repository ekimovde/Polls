import { SelectOptionBase } from '../repository/constants';
import { selectOption } from '~/static-data/select/factory';

export const getArrayWithSelectOption = (quantity: number): SelectOptionBase[] => {
  return (new Array(quantity).fill(null) as SelectOptionBase[]).map((_, index) => {
    const currentValue = index + 1;

    return selectOption({
      label: String(currentValue),
      value: currentValue
    });
  });
};
