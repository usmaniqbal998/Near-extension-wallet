import React from 'react';
import styled from 'styled-components';
import CloseIco from '../assets/close_ico';

interface Props {
  children: React.ReactChild | React.ReactChild[];
  closeAction?: Boolean;
}

const Navbar: React.FunctionComponent<Props> = ({
  children,
  closeAction,
}: Props) => {
  return (
    <NavContainer>
      {children}
      {closeAction && <CloseIcon />}
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
  min-height: 5.5rem;
`;

const CloseIcon = styled(CloseIco)`
  position: absolute;
  right: 18px;
  top: calc(50% - 12px);
`;

export default Navbar;
