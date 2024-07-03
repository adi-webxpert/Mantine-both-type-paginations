/* eslint-disable max-len */
import { useState } from 'react';
import { Select } from '@mantine/core';

export const AppList = ({ options, defaultValue, label, onChange, getSelectedOption, ...props }: any) => {
  const [value, setValue] = useState(defaultValue);
  const onChangeValue = (option:any) => {
    if (option) {
      setValue(option.value);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onChange && typeof onChange === 'function' ? onChange(option.value) : '';
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      getSelectedOption && typeof getSelectedOption === 'function' ? getSelectedOption(option) : '';
    } else {
      setValue(null);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onChange && typeof onChange === 'function' ? onChange(null) : '';
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      getSelectedOption && typeof getSelectedOption === 'function' ? getSelectedOption(null) : '';
    }
  };
  return (
    <Select
      placeholder={label}
      label={label}
      w="100%"
      data={options?.filter((option: any) => typeof option === 'object' ? option.value && option.value !== '' && option.value !== undefined : option !== '' && option !== undefined)?.map((option: any) => {
        if (typeof option === 'object') {
          return {
            ...option,
            value: `${option.value}`,
          };
        }
        return option; 
      })}
      value={value}
      onChange={(_value, option) => onChangeValue(option)}
      nothingFoundMessage="No option available"
      allowDeselect
      clearable
      {...props}
  />
  );
};