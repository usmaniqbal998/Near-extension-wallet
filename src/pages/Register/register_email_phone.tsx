import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/button';
import Input from '../../components/Input';
import { action, registerState } from './register_reducer';

interface Props {
  registerationState: registerState;
  dispatch: React.Dispatch<action>;
}

const RegisterByEmailOrPhone: React.FunctionComponent<Props> = ({
  registerationState,
  dispatch,
}: Props) => {
  const history = useHistory();

  const handleRegisterOptionsChanged = (registerby: string) => {
    dispatch({ type: 'changeRegisterBy', payload: registerby });
  };

  const onValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'changeEmailOrPhone', payload: e.target.value });
  };

  const onNextStep = () => {
    dispatch({ type: 'nextStep', payload: 1 });
  };

  return (
    <MainContainer>
      <ChipsContainer>
        <Chips
          selected={registerationState.registerBy === 'Email'}
          onClick={() => handleRegisterOptionsChanged('Email')}
        >
          Email
        </Chips>
        <Chips
          selected={registerationState.registerBy === 'Phone'}
          onClick={() => handleRegisterOptionsChanged('Phone')}
        >
          Phone
        </Chips>
      </ChipsContainer>
      <Input
        value={
          registerationState.registerBy === 'Email'
            ? registerationState.email
            : registerationState.phone
        }
        placeholderText={
          registerationState.registerBy === 'Email'
            ? 'John@gmail.com'
            : 'Ex (337) 378 8383'
        }
        onChange={onValueChanged}
      />
      <ActionContainer>
        <Button
          variant="primary"
          label="Continue"
          onClick={onNextStep}
          disabled={
            (registerationState.registerBy === 'Email' &&
              registerationState.email === '') ||
            (registerationState.registerBy === 'Phone' &&
              registerationState.phone === '')
          }
        />

        <TermsAndPrivacy>
          by clicking continue you must agree to near labs{' '}
          <a href="#">Terms & Conditions</a> and <a href="#"> Privacy Policy</a>
        </TermsAndPrivacy>
      </ActionContainer>
      <Divider />

      <ActionContainer>
        <AlreadyHave>Already have Near Account?</AlreadyHave>
        <Button
          variant="secondary"
          label="Login with Near"
          onClick={() => {
            history.push('/login');
          }}
        />
      </ActionContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ChipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.2rem;
`;

const Chips = styled.div<{ selected: boolean }>`
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.8rem;
  letter-spacing: -0.154px;
  color: #6f6e73;
  padding: 0.6rem 1.2rem;
  background: ${props => (props.selected ? '#fcfcfc' : 'transparent')};
  border: ${props => (props.selected ? '1px solid #bebec2' : 'none')};
  border-radius: 10px;
`;

const TermsAndPrivacy = styled.p`
  margin-top: 3.2rem;
  font-family: Manrope;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #6f6e73;
`;

const Divider = styled.div`
  border: 1px solid #dfdfe0;
  margin-top: 3.2rem;
`;

const AlreadyHave = styled.p`
  margin-top: 3.2rem;
  margin-bottom: 1.4rem;
`;

export default RegisterByEmailOrPhone;
