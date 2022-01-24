import * as React from 'react';
import styled from 'styled-components';
import CardIcon from '../assets/cardIcons';

interface Props {
  main: string;
  secondary: string;
  categoryName: string;
}

const CategoryItem: React.FunctionComponent<Props> = ({
  main,
  secondary,
  categoryName,
}: Props) => {
  return (
    <Card main={main}>
      <IconContainer secondary={secondary}>
        <CardIcon />
      </IconContainer>
      <Categorylabel>{categoryName}</Categorylabel>
    </Card>
  );
};

const IconContainer = styled.div<{ secondary: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background: ${props => props.secondary};
`;

const Categorylabel = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  color: rgba(51, 55, 59, 0.7);
`;

const Card = styled.div<{ main: string }>`
  width: 49%;
  background: #eaefff;
  display: flex;
  flex-direction: column;
  height: 10rem;
  padding: 1rem;
  justify-content: space-between;
  border-radius: 1rem;
  margin-top: 1rem;
  background-color: ${props => props.main};
`;

export default CategoryItem;
