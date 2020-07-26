import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { MdAssignmentInd, MdEmail } from 'react-icons/md';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

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
  background: ${props => props.theme.palette.profileBackground};
  border-radius: 20px;
  box-shadow: 0px 2px 4px ${props => props.theme.palette.shadow};
  width: ${props => props.theme.sizes.profileWidth};
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  text-align: center;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
  }
`;

const Info = styled.div`
  margin-bottom: 1rem;
`;

const Footer = styled.div`
  border-top: 1px solid ${props => props.theme.palette.profileJob};
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.a`
  box-shadow: 0px 2px 4px ${props => props.theme.palette.shadow};
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
    align-items: center;
    ${BlockOne} {
      max-width: 220px;
      border-right: 1px solid ${props => props.theme.palette.profileJob};
      padding-left: 2rem;
      padding-right: 2rem;
    }
    ${BlockTwo} {
      margin-left: 2rem;
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
const InfoItem = styled.div`
  word-wrap: break-word;
  font-family: 'Roboto', sans-serif;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  img {
    background: #eee;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    box-shadow: 1px 3px 4px ${props => props.theme.palette.shadow};
  }
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.theme.palette.mainFont};
  }
  h3 {
    color: ${props => props.theme.palette.profileJob};
  }
  p {
    font-size: 0.8rem;
    color: ${props => props.theme.palette.profileDesc};
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    h1 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 0.9rem;
    }
  }
`;
// Tabnabbing Attack Avoid: https://html.spec.whatwg.org/multipage/links.html#link-type-noopener
const Profile = () => {
  return (
    <StaticQuery
      query={profileQuery}
      render={data => {
        const { author, email, social, description, occupation } = data.site.siteMetadata;
        return (
          <ProfileBlock>
            <Wrapper>
              <BlockOne>
                <Info>
                  <InfoItem>
                    <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
                  </InfoItem>
                  <InfoItem>
                    <h1>{author}</h1>
                  </InfoItem>
                  <InfoItem>
                    <h3>{occupation}</h3>
                  </InfoItem>
                  <InfoItem>
                    <p>{description}</p>
                  </InfoItem>
                </Info>
              </BlockOne>
              <BlockTwo>
                <Footer>
                  <Item href={`/`} onClick={() => alert('페이지 준비중입니다.')}>
                    <MdAssignmentInd size={34} color={'#f4f6ff'} />
                  </Item>
                  <Item
                    href={`https://github.com/${social.github}`}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <FaGithub size={34} color={'#f4f6ff'} />
                  </Item>
                  <Item
                    href={`https://www.instagram.com/${social.instagram}`}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <FaInstagram size={34} color={'#f4f6ff'} />
                  </Item>
                  <Item href={`mailto:${email}`}>
                    <MdEmail size={34} color={'#f4f6ff'} />
                  </Item>
                </Footer>
              </BlockTwo>
            </Wrapper>
          </ProfileBlock>
        );
      }}
    />
  );
};

export default Profile;

const profileQuery = graphql`
  query DefaultProfileQuery {
    avatar: file(absolutePath: { regex: "/profile.png/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        description
        author
        occupation
        email
        social {
          github
          instagram
        }
      }
    }
  }
`;
