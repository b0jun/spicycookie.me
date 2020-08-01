import React from 'react';
import Layout from '../components/Common/Layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import githubStyles from '../lib/styles/githubStyles';
import { FaTag, FaArrowLeft } from 'react-icons/fa';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import { Seo } from '../components/Service/Seo';
import Navigator from '../components/Post/Navigator';
import Button from '../components/Common/Button';
import Utterances from '../components/Service/Utterances';
import logo from '../../static/images/svg/logo.svg';
const MarkDown = styled.div`
  ${githubStyles}
  margin-top: 4rem;
  margin-bottom: 3rem;
`;
const ContentWrapper = styled.div`
  background: #f5f5f5;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 2rem ${props => props.theme.sideSpace.contentLarge};
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 30px ${props => props.theme.sideSpace.contentSmall};
  }
`;
const Title = styled.h1`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 2.2rem;
  font-weight: 900;
  color: ${props => props.theme.palette.brightBlue1};
  @media screen and (max-width: ${props => props.theme.responsive.largest}) {
    font-size: 1.9rem;
  }
`;
const Date = styled.p`
  font-style: italic;
  margin-top: 0.5rem;
  padding-right: 0.5rem;
  text-align: right;
  color: ${props => props.theme.palette.profileDesc};
`;
const Header = styled.div`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: ${props => props.theme.palette.brightBlue3};
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledButton = styled(Button)`
  &:nth-child(1) {
    color: ${props => props.theme.palette.brightBlue1};
    border: 2px solid ${props => props.theme.palette.brightBlue1};
    &:hover {
      color: ${props => props.theme.palette.mainFont};
      background: ${props => props.theme.palette.brightBlue1};
    }
  }
  &:nth-child(2) {
    color: ${props => props.theme.palette.brightGreen2};
    border: 2px solid ${props => props.theme.palette.brightGreen2};
    &:hover {
      color: ${props => props.theme.palette.mainFont};
      background: ${props => props.theme.palette.brightGreen2};
    }
  }
`;
const Line = styled.div`
  width: 90%;
  height: 4px;
  background: linear-gradient(
    92deg,
    ${props => props.theme.palette.brightBlue2},
    ${props => props.theme.palette.brightBlue3},
    ${props => props.theme.palette.brightGreen3}
  );
  margin: 0 auto;
`;
export default ({ data, pageContext }) => {
  deckDeckGoHighlightElement();
  const { html } = data.markdownRemark;
  const repo = data.site.siteMetadata.utterancesRepo;
  const { siteUrl } = data.site.siteMetadata;
  const { title, date, category, cover } = data.markdownRemark.frontmatter;
  const coverSrc = cover ? `${siteUrl}${cover.childImageSharp.fluid.src}` : undefined;
  return (
    <Layout>
      <Seo title={title} description={data.markdownRemark.excerpt} coverSrc={coverSrc} />
      <Header>
        <img src={logo} style={{ width: '100px', height: '100px' }} alt="" />
      </Header>
      <ContentWrapper>
        <ButtonBlock>
          <StyledButton to={`/category/${category}`}>
            <FaTag size={13} style={{ marginRight: '8px' }} />
            {category}
          </StyledButton>
          <StyledButton to="/">
            <FaArrowLeft size={12} style={{ marginRight: '8px' }} />
            Back to Blog
          </StyledButton>
        </ButtonBlock>
        <Title>{title}</Title>
        <Line />
        <Date>{date}</Date>
        <MarkDown>
          <div id="markdown" dangerouslySetInnerHTML={{ __html: html }} />
        </MarkDown>
        <Line />
        <Navigator pageContext={pageContext} />
        <Utterances repo={repo} />
      </ContentWrapper>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        utterancesRepo
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 280)
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        category
        cover {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
    }
  }
`;
