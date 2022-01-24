import React from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  className?: string;
  placeholderText: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input: React.FunctionComponent<Props> = ({
  value,
  className,
  placeholderText,
  label,
  onChange,
  type,
}: Props) => {
  return (
    <InputContainer>
      {label && <Label htmlFor={label}>{label}</Label>}
      <InputField
        name={label || ''}
        placeholder={placeholderText}
        value={value}
        className={className}
        onChange={onChange}
        type={type}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  margin-bottom: 1.6rem;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1.4rem;
  line-height: 1.9rem;
  color: #6f6e73;
  margin-bottom: 1rem;
  display: block;
`;

const InputField = styled.input`
  outline: none;
  width: 100%;
  border: 1px solid #bebec2;
  height: 4.5rem;
  padding: 1.15rem 2rem;
  color: #414047;
  background-color: #fcfcfc;
  border-radius: 0.8rem;
  font-size: 16px;
  line-height: 22px;

  &::placeholder {
    color: #828282;
  }

  &:focus {
    border: 2px solid #885fff;
  }
`;

export default Input;
