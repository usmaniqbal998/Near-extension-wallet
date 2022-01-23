import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = props => {
  return (
    <>
      <Button onClick={() => {}} label="Button" variant="primary" />
      <Input value="" placeholderText="some text" />
    </>
  );
};

export default Login;
