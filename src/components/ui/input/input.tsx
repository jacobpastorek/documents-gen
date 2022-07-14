import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { InputSC } from './input.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
  className?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { placeholder, label, className, isRequired, ...rest },
  ref,
) => {
  return (
    <InputSC className={className ? className : ''}>
      {/* <label htmlFor={name}>{label}</label> */}
      <input {...rest} ref={ref} placeholder={placeholder} />
    </InputSC>
  );
};

export default React.forwardRef(Input);
