import React from 'react';
import styled from 'styled-components';

const ProfileBlock = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 4px;
  background: green;
  width: ${props => props.theme.sizes.profileWidth};

  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
  }
`;

const Header = styled.div``;
const Section = styled.div``;
const Footer = styled.div``;

const Profile = () => {
  return (
    <ProfileBlock>
      <Header>name</Header>
      <Section>description</Section>
      <Footer>snsLink</Footer>
    </ProfileBlock>
  );
};

export default Profile;
