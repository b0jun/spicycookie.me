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
  font-family: 'Roboto', 'InfinitySans-BoldA1', sans-serif;
  position: -webkit-sticky;
  position: sticky;
  top: 4px;
  background: ${props => props.theme.palette.profileBackground};
  border-radius: 20px;
  box-shadow: 0px 2px 4px ${props => props.theme.commonColor.shadow};
  width: ${props => props.theme.sizes.profileWidth};
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    width: 100%;
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  text-align: center;
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
  box-shadow: 0px 2px 4px ${props => props.theme.commonColor.shadow};
  border-radius: 100%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  &:hover {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  :first-child {
    background: linear-gradient(
      to bottom right,
      ${props => props.theme.palette.bioGradient1},
      ${props => props.theme.palette.bioGradient2}
    );
  }
  :nth-child(2) {
    background: linear-gradient(
      to bottom right,
      ${props => props.theme.palette.bioGradient3},
      ${props => props.theme.palette.bioGradient4}
    );
  }
  :nth-child(3) {
    background: linear-gradient(
      to bottom right,
      ${props => props.theme.palette.bioGradient5},
      ${props => props.theme.palette.bioGradient6}
    );
  }
  :last-child {
    background: linear-gradient(
      to bottom right,
      ${props => props.theme.palette.bioGradient7},
      ${props => props.theme.palette.bioGradient8}
    );
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
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  img {
    background: #eee;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    box-shadow: 0 0 2px ${props => props.theme.commonColor.shadow};
  }
  h1 {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${props => props.theme.palette.mainFont};
  }
  h3 {
    color: ${props => props.theme.palette.profileJob};
  }
  p {
    font-size: 0.8rem;
    line-height: 1.2;
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
        const { author, email, social, description, resume, occupation } = data.site.siteMetadata;
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
                  <Item href={resume} rel="noreferrer noopener" target="_blank">
                    <MdAssignmentInd size={28} color={'#f4f6ff'} />
                  </Item>
                  <Item
                    href={`https://github.com/${social.github}`}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <FaGithub size={28} color={'#f4f6ff'} />
                  </Item>
                  <Item
                    href={`https://www.instagram.com/${social.instagram}`}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <FaInstagram size={28} color={'#f4f6ff'} />
                  </Item>
                  <Item href={`mailto:${email}`}>
                    <MdEmail size={28} color={'#f4f6ff'} />
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
        resume
        social {
          github
          instagram
        }
      }
    }
  }
`;
