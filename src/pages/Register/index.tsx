import React, { useReducer } from 'react';
import styled from 'styled-components';
import NavLogo from '../../assets/navlogo';
import Navbar from '../../components/navbar';
import CreateAccount from './createaccount';
import RegisterByEmailOrPhone from './register_email_phone';
import ManageRegisterationReducer, { initialState } from './register_reducer';
import SecureAccount from './secureaccount';
import Verfification from './verification';

const Register: React.FunctionComponent = () => {
  const [register, dispatch] = useReducer(
    ManageRegisterationReducer,
    initialState
  );

  const getContent = (steps: number) => {
    switch (steps) {
      case 0:
        return (
          <RegisterByEmailOrPhone
            registerationState={register}
            dispatch={dispatch}
          />
        );

      case 1:
        return (
          <Verfification registerationState={register} dispatch={dispatch} />
        );
      case 2:
        return (
          <CreateAccount registerationState={register} dispatch={dispatch} />
        );

      case 3:
        return (
          <SecureAccount registerationState={register} dispatch={dispatch} />
        );

      default:
        return <></>;
    }
  };

  const getNavTitle = (steps: number) => {
    switch (steps) {
      case 0:
        return <NavLogo />;
      case 1:
        return <Title>Verification</Title>;
      case 2:
        return <Title>Create NEAR account</Title>;
      case 3:
        return <Title>Secure Your account</Title>;

      default:
        return <></>;
    }
  };

  return (
    <RegisterContainer>
      <Navbar closeAction={register.currentRegisterationStep !== 0}>
        {getNavTitle(register.currentRegisterationStep)}
      </Navbar>
      <ContentContainer>
        {getContent(register.currentRegisterationStep)}
      </ContentContainer>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 0;
  min-width: 0;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  flex: 1;
  margin-top: 3rem;
  padding: 0 2.8rem;
`;

const Title = styled.h2`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 22rem;
  letter-spacing: -0.408px;
  color: #000000;
`;

export default Register;
