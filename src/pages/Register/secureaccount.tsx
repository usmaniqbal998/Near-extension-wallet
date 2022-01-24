import React from 'react';
import { action, registerState } from './register_reducer';
import styled from 'styled-components';
import OtpInput from 'react-otp-input';
import Button from '../../components/button';
import Input from '../../components/Input';
import axios from '../../mock_api/axios';

interface Props {
  registerationState: registerState;
  dispatch: React.Dispatch<action>;
}

const SecureAccount: React.FunctionComponent<Props> = ({
  registerationState,
  dispatch,
}: Props) => {
  const onNextStep = () => {
    axios
      .post('/registeruser', registerationState)
      .then(function (response) {
        console.log('User Created');
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container>
      <Text>Keep your apps safe from other with access to your computer</Text>

      <Input
        value={registerationState.password}
        placeholderText=""
        onChange={e => {
          dispatch({ type: 'addPassword', payload: e.target.value });
        }}
        label="Password"
        type="password"
      />

      <Input
        value={registerationState.confirmpassword}
        placeholderText=""
        onChange={e => {
          dispatch({ type: 'confirmPassword', payload: e.target.value });
        }}
        label="Confirm Password"
        type="password"
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

export default SecureAccount;
