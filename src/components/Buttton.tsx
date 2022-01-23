import React from 'react';
import styled, { css } from 'styled-components';
import NextIco from '../assets/next_ico';
import { buttontypes } from '../common/types';

interface Props {
  variant: buttontypes;
  label: string;

  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

interface ButtonProps {
  btnType: buttontypes;
}

const Button: React.FunctionComponent<Props> = ({
  variant,
  label,
  onClick,
  className,
}: Props) => {
  return (
    <Btn onClick={onClick} btnType={variant} className={className}>
      <span>{label}</span>
      <NextIco />
    </Btn>
  );
};

const Btn = styled.button<ButtonProps>(props => {
  const baseStyles = `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    background: #885fff;
    border-radius: 1rem;
    font-size: 1.6rem;
    line-height: 22px;
    color: #FFFFFF;
    min-width:10.15rem;
    letter-spacing: -0.408px;
  `;
  switch (props.btnType) {
    case 'primary':
      return css`
        ${baseStyles};
        background: #885fff;
      `;
    case 'flat':
      return css`
        background: transparent;
      `;

    case 'secondary':
      return css`
        ${baseStyles};
        background: #414047;
      `;

    default:
      return baseStyles;
  }
});

export default Button;
