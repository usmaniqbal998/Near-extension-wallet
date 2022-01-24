import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserAvatar from '../assets/useravatar';
import axios from '../mock_api/axios';

const UserDropdown: React.FunctionComponent = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    axios.get('/getuser').then(res => {
      console.log(res);
      setName(res.data.data.user.name);
    });
  });

  return (
    <MainContainer>
      <AvatarContainer>
        <UserAvatar />
      </AvatarContainer>

      <Username>{name}</Username>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 1rem;
  background-color: #ffff;
  border: 1px solid #dfdfe0;
  border-radius: 30px;
  display: flex;
  align-items: center;
  width: 14.2rem;
`;

const AvatarContainer = styled.div`
  overflow: hidden;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 100%;
  border: 2px solid #0000;
`;

const Username = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.154px;
  color: #33373b;
  margin-left: 1rem;
`;

export default UserDropdown;
