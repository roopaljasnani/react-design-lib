import {Input as BaseInput} from 'baseui/input';
import React, {ChangeEvent, FC, useState} from 'react';
import {InputProps} from '.';

/**
 * Render an input to enable capture information provided.
 * @param {InputProps} props
 * @returns {React.ReactElement} The input component.
 */
const Input: FC<InputProps> = ({defaultValue, disabled, error, id, onChange, placeholder}) => {
  const [value, setValue] = useState(defaultValue);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    onChange?.(e);
  };

  return <BaseInput {...{disabled, error, id, placeholder, value}} onChange={handleOnChange} />;
};

Input.defaultProps = {
  defaultValue: '',
  disabled: false,
  error: false,
  id: '',
  placeholder: '',
};

export default Input;
