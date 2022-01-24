import React from 'react';
import styled from 'styled-components';
import BackIcon from '../../assets/backicon';
import DefiIcon from '../../assets/defiicons';

import HomeIcon from '../../assets/homeicon';
import Settings from '../../assets/settings';

import Notification from '../../assets/notification';
import Navbar from '../../components/navbar';
import UserDropdown from '../../components/userdropdown';
import Input from '../../components/Input';
import Filter from '../../assets/filter';
import ExperianceItem from '../../components/experianceitem';
import DocuSign from '../../assets/docusign';
import CardIcon from '../../assets/cardIcons';
import CategoryItem from '../../components/categoryitem';

const Home: React.FunctionComponent = () => {
  return (
    <HomeContainer>
      <Nav>
        <BackIcon />
        <HomeIcon />
        <UserDropdown />
        <Notification />
        <Settings />
      </Nav>

      <ContentContainer>
        <SearchContainer>
          <Input
            placeholderText="Search experiences"
            value=""
            onChange={() => {}}
          />
          <FilterIcon />
        </SearchContainer>

        <ListTitle>Recent Experiences</ListTitle>
        <ExperianceItem
          title="DeFi Swap"
          subtitle="Swap your assets"
          users="+200 users"
          Icon={DefiIcon}
        />
        <ExperianceItem
          title="Docu Sign"
          subtitle="Sign Smart Contracts"
          users="1k+ users"
          Icon={DocuSign}
        />

        <ListTitle>Popular Categories</ListTitle>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <CategoryItem
            secondary="#587BE0"
            main="#EAEFFF"
            categoryName="Exchanges"
          />
          <CategoryItem
            secondary="#414047"
            main="#F5F5F5"
            categoryName="Games"
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <CategoryItem
            secondary="#34AE91"
            main="#E2F9F3"
            categoryName="Marketplaces"
          />
          <CategoryItem
            secondary="#F98F54"
            main="#FFF3EC"
            categoryName="Defi"
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <CategoryItem
            secondary="#587BE0"
            main="#EAEFFF"
            categoryName="Exchanges"
          />
          <CategoryItem
            secondary="#414047"
            main="#F5F5F5"
            categoryName="Games"
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <CategoryItem
            secondary="#34AE91"
            main="#E2F9F3"
            categoryName="Marketplaces"
          />
          <CategoryItem
            secondary="#F98F54"
            main="#FFF3EC"
            categoryName="Defi"
          />
        </div>
      </ContentContainer>
    </HomeContainer>
  );
};

const FilterIcon = styled(Filter)`
  margin-left: 3rem;
`;

const ListTitle = styled.p`
  /* Recent Experiences */

  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.154px;
  /* text/200 */
  color: #414047;
  margin-top: 2rem;
`;

const Nav = styled(Navbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2.2rem;
  margin-bottom: 1rem;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 95%;
  align-items: center;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.6rem;
`;

export default Home;
