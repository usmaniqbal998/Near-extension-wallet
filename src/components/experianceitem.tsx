import React from 'react';
import styled from 'styled-components';

interface IExperianceItemProps {
  title: string;
  subtitle: string;
  users: string;
  Icon: React.FunctionComponent;
}

const ExperianceItem: React.FunctionComponent<IExperianceItemProps> = ({
  title,
  subtitle,
  users,
  Icon,
}: IExperianceItemProps) => {
  return (
    <ItemContainer>
      <IconContainer>
        <Icon />
      </IconContainer>
      <ContentContainer>
        <ListTitle>{title}</ListTitle>
        <SubTitle>{subtitle}</SubTitle>
        <SubTitle>
          <a href="#"> {users}</a>
        </SubTitle>
      </ContentContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

const ListTitle = styled.p`
  /* Recent Experiences */

  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.154px;
  /* text/200 */
  color: #414047;
`;

const SubTitle = styled.p`
  /* Recent Experiences */

  font-size: 1.4rem;
  line-height: 22px;
  letter-spacing: -0.154px;
  /* text/200 */
  color: #6f6e73;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.6rem;
`;

export default ExperianceItem;
