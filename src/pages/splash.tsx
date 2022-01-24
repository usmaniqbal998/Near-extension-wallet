import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CompanyLogo from '../assets/company_logo';
import HomeIcon from '../assets/home _icon';
import LoginSvgBackground from '../assets/login_background';
import { device } from '../styles/devices';

const SplashScreen = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/register');
    }, 1500);
  });

  return (
    <MainContainer>
      <Background />
      <IntroTextContainer>
        <LogoContainer>
          <HomeIcon />
          <LogoText>Near Wallet</LogoText>
        </LogoContainer>
        <SubText>A web3 gateway to hidden experiences</SubText>
      </IntroTextContainer>

      <Footer>
        <SubText>Powered By</SubText>

        <CompanyLogo />
      </Footer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  @media ${device.mobiles} {
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #30b4ff5c;
    justify-content: center;
    align-items: center;
  }
`;

const LogoText = styled.h1`
  color: #fff;
  margin-left: 1rem;
`;
const SubText = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
  margin-top: 1rem;
  color: #fcfcfc;
  margin-bottom: 2.7rem;
`;

const IntroTextContainer = styled.div`
  @media ${device.mobiles} {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
`;

const LogoContainer = styled.div`
  @media ${device.mobiles} {
    display: flex;
    align-items: center;
  }
`;

const Background = styled(LoginSvgBackground)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 4rem;
`;

export default SplashScreen;
