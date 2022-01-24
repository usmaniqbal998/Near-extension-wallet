import React from 'react';
import { action, registerState } from './register_reducer';
import styled from 'styled-components';
import OtpInput from 'react-otp-input';
import Button from '../../components/button';
import { Axios, AxiosError } from 'axios';
import axios from '../../mock_api/axios';

interface Props {
  registerationState: registerState;
  dispatch: React.Dispatch<action>;
}

const Verfification: React.FunctionComponent<Props> = ({
  registerationState,
  dispatch,
}: Props) => {
  const onNextStep = () => {
    axios
      .post('/verifyotp', registerationState)
      .then(function () {
        dispatch({ type: 'nextStep', payload: 2 });
      })
      .catch(function (error: AxiosError) {
        console.log(error);
      });
  };

  return (
    <Container>
      <VerificationText>
        We've sent a 6-digit verification code to the email address
      </VerificationText>

      <EmailOrPhone>
        {registerationState.registerBy === 'Email'
          ? registerationState.email
          : registerationState.phone}
      </EmailOrPhone>

      <VerificationLabel>Enter Verification Label</VerificationLabel>
      <Otp
        containerStyle={OTPContainerStyles}
        value={registerationState.otp}
        onChange={(value: string) => {
          dispatch({ type: 'changeOTP', payload: value });
        }}
        numInputs={6}
        isInputNum
      />

      <ActionContainer>
        <Button
          variant="primary"
          label="Continue"
          onClick={onNextStep}
          disabled={registerationState.otp.length < 6}
        />
      </ActionContainer>

      <Divider />

      <ActionContainer>
        <GeneralText>Didnt Recieved your code?</GeneralText>
        <GeneralText>
          <a href="#">Send to a different email address</a>
        </GeneralText>
        <GeneralText>
          <a href="#">Resend your code</a>
        </GeneralText>
      </ActionContainer>
    </Container>
  );
};

const OTPContainerStyles = {
  justifyContent: 'space-between',
  marginBottom: '3.2rem',
};

const GeneralText = styled.p`
  margin-top: 2.4rem;
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const VerificationText = styled.p`
  text-align: center;
  margin-bottom: 1.2rem;
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

export default Verfification;
