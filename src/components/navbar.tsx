import React from 'react';
import styled from 'styled-components';
import CloseIco from '../assets/close_ico';

interface Props {
  children: React.ReactChild | React.ReactChild[];
  closeAction?: Boolean;
  onClosePressed?: () => void;
  className?: string;
}

const Navbar: React.FunctionComponent<Props> = ({
  children,
  closeAction,
  onClosePressed,
  className,
}: Props) => {
  return (
    <NavContainer className={className}>
      {children}
      {closeAction && <CloseIcon onClick={onClosePressed} />}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background: #f5f5f5;
  border: 1px solid #dfdfe0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 6rem;
`;

const CloseIcon = styled(CloseIco)`
  position: absolute;
  right: 18px;
  top: calc(50% - 12px);
`;

export default Navbar;
