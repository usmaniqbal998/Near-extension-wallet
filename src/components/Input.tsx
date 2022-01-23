import React from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  className?: string;
  placeholderText: string;
}

const Input: React.FunctionComponent<Props> = ({
  value,
  className,
  placeholderText,
}: Props) => {
  return (
    <InputField
      placeholder={placeholderText}
      value={value}
      className={className}
    />
  );
};

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
