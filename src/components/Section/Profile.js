import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../../static/images/svg/logo.svg';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { MdAssignmentInd, MdEmail } from 'react-icons/md';

const shake = keyframes`{
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}`;

const ProfileBlock = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 4px;
  background: ${props => props.theme.palette.darkBlue};
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 16px 0px;
  width: ${props => props.theme.sizes.profileWidth};
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
    position: relative;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 1rem;
  img {
    background: white;
    width: 120px;
    height: 116px;
    border-radius: 100%;
    margin-bottom: 1.5rem;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.palette.mainWhite};
    margin-bottom: 1rem;
  }
  p {
    color: ${props => props.theme.palette.profileJob};
  }
`;
const Section = styled.div`
  margin-bottom: 1rem;
  p {
    font-size: 0.8rem;
    color: ${props => props.theme.palette.profileDesc};
  }
`;

const Footer = styled.div`
  border-top: 1px solid ${props => props.theme.palette.profileJob};
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.a`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  &:hover {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    /* animation-iteration-count: infinite; */
  }
  :first-child {
    background: linear-gradient(to bottom right, #5e5aec, #3f9efc);
  }
  :nth-child(2) {
    background: linear-gradient(to bottom right, #6452e9, #639ff9);
  }
  :nth-child(3) {
    background: linear-gradient(to top right, #8162ce, #f54ba5);
  }
  :last-child {
    background: linear-gradient(to top right, #8162ce, #f54ba5);
  }
`;
const BlockOne = styled.div``;
const BlockTwo = styled.div``;
const Wrapper = styled.div`
  padding: 2rem 1rem;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    display: flex;
    justify-content: center;
    ${BlockOne} {
      border-right: 1px solid ${props => props.theme.palette.profileJob};
      padding-right: 3rem;
      margin-right: 3rem;
    }
    ${BlockTwo} {
      display: flex;
    }
    ${Footer} {
      border-top: 0;
      padding-top: 0;
      flex-direction: column;
    }
    ${Item} {
      margin: 0;
      margin-top: 0.3rem;
      margin-bottom: 0.3rem;
    }
  }
`;
// Tabnabbing Attack Avoid: https://html.spec.whatwg.org/multipage/links.html#link-type-noopener
const Profile = () => {
  return (
    <ProfileBlock>
      <Wrapper>
        <BlockOne>
          <Header>
            <img src={logo} alt="logo" />
            <h1>Byeong Jun, Kim</h1>
            <p>Web Developer</p>
          </Header>
          <Section>
            <p>안녕하세요. 저는 웹 개발자입니다.</p>
          </Section>
        </BlockOne>
        <BlockTwo>
          <Footer>
            <Item href={`/`} onClick={() => alert('페이지 준비중입니다.')}>
              <MdAssignmentInd size={34} color={'#f4f6ff'} />
            </Item>
            <Item
              href={`https://github.com/billowycloud`}
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaGithub size={34} color={'#f4f6ff'} />
            </Item>
            <Item
              href={`https://www.instagram.com/billowy_clouds`}
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaInstagram size={34} color={'#f4f6ff'} />
            </Item>
            <Item href={`mailto:bjkim0228@naver.com`}>
              <MdEmail size={34} color={'#f4f6ff'} />
            </Item>
          </Footer>
        </BlockTwo>
      </Wrapper>
    </ProfileBlock>
  );
};

export default Profile;
