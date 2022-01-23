import React from 'react';
import NavLogo from '../assets/navlogo';
import Button from '../components/button';
import Input from '../components/Input';
import Navbar from '../components/navbar';

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = props => {
  return (
    <>
      <Button onClick={() => {}} label="Button" variant="primary" />
      <Input label="some label" value="" placeholderText="some text" />
      <Navbar closeAction={true}>
        <NavLogo />
      </Navbar>
    </>
  );
};

export default Login;
