import {ChangeEventHandler} from 'react';

export interface InputProps {
  /** Input's default 'value' */
  defaultValue?: string;
  /** Renders component in 'disabled' state */
  disabled?: boolean;
  /** Renders component in 'error' state */
  error?: boolean;
  /** Input's 'id' */
  id?: string;
  /** Input's 'onChange' handler / callback called when input value is changed. */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Input's 'placeholder' */
  placeholder?: string;
}
