import React from 'react';
import { action, registerState } from './register_reducer';
import styled from 'styled-components';
import OtpInput from 'react-otp-input';
import Button from '../../components/button';
import Input from '../../components/Input';

interface Props {
  registerationState: registerState;
  dispatch: React.Dispatch<action>;
}

const CreateAccount: React.FunctionComponent<Props> = ({
  registerationState,
  dispatch,
}: Props) => {
  const onNextStep = () => {
    dispatch({ type: 'nextStep', payload: 3 });
  };

  return (
    <Container>
      <Text>
        Enter an Account ID to use with your NEAR account. Your Account ID will
        be used for all NEAR operations, including sending and receiving assets.
      </Text>

      <Input
        value={registerationState.name}
        placeholderText="Ex. John Doe"
        onChange={e => {
          dispatch({ type: 'addName', payload: e.target.value });
        }}
        label="Full Name"
      />

      <Input
        value={registerationState.username}
        placeholderText="Username"
        onChange={e => {
          dispatch({ type: 'addUsername', payload: e.target.value });
        }}
        label="Account Id"
      />

      <ActionContainer>
        <Button
          variant="primary"
          label="Continue"
          onClick={onNextStep}
          disabled={registerationState.otp.length < 6}
        />
      </ActionContainer>

      <ActionContainer>
        <GeneralText>
          By creating a NEAR account, you agree to the NEAR Wallet{' '}
          <a> Terms of Service and Privacy Policy.</a>
        </GeneralText>
      </ActionContainer>

      <Divider />

      <ActionContainer>
        <GeneralText>Already Have Near Account?</GeneralText>
        <Button
          variant="secondary"
          label="Login with NEAR"
          onClick={() => {}}
          disabled={registerationState.otp.length < 6}
        />
      </ActionContainer>
    </Container>
  );
};

const GeneralText = styled.p`
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
  text-align: center;
  color: #6f6e73;
`;

const Otp = styled(OtpInput)`
  width: 4rem;
  height: 4rem;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px solid #cfcfcf;
  border-radius: 6px;
  text-align: center;
  justify-content: center;

  & input {
    background-color: transparent;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2.4rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.p`
  color: #808080;
  margin-bottom: 2.4rem;
  font-weight: 500;
  line-height: 2.4rem;
`;

const EmailOrPhone = styled.p`
  color: #587be0;
  text-align: center;
  font-weight: 500;
  line-height: 2.4rem;
  margin-bottom: 3rem;
`;

const VerificationLabel = styled.p`
  color: #808080;
  text-align: center;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 24px;
  margin-bottom: 1.2rem;
`;

const Divider = styled.div`
  border: 1px solid #dfdfe0;
  margin-top: 3.2rem;
`;

export default CreateAccount;
