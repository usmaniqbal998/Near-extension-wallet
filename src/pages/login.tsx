import React from 'react';
import Button from '../components/button';
import Input from '../components/Input';
import Navbar from '../components/navbar';

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = props => {
  return (
    <>
      <Button onClick={() => {}} label="Button" variant="primary" />
      <Input value="" placeholderText="some text" />
      <Navbar>Verification</Navbar>
    </>
  );
};

export default Login;
