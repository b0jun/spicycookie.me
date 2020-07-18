import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import githubStyles from '../lib/styles/githubStyles';
import _ from 'lodash';

const Block = styled.div`
  ${githubStyles}
  background: #fff;
`;

const ContentWrapper = styled.div`
  padding: 2rem ${props => props.theme.sideSpace.contentLarge};
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 30px ${props => props.theme.sideSpace.contentSmall};
  }
`;

const Title = styled.h1`
  border-bottom: 1px solid ${props => props.theme.palette.profileDesc};
`;
const Category = styled(Link)`
  background: gray;
  border-radius: 20px;
  padding: 5px 10px;
`;
const Date = styled.p`
  text-align: right;
  color: ${props => props.theme.palette.profileDesc};
`;

export default ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, date, category } = data.markdownRemark.frontmatter;
  let categoryLink = _.kebabCase(category);
  return (
    <Layout>
      <Block>
        <div style={{ background: 'black' }}>ddddddd</div>
        <ContentWrapper>
          <Category style={{ color: 'white' }} to={`/category/${categoryLink}`}>
            {category}
          </Category>
          <Title style={{ fontSize: '4rem', lineHeight: '1.5' }}>{title}</Title>
          <Date style={{ lineHeight: '1' }}>{date}</Date>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </ContentWrapper>
      </Block>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        category
      }
    }
  }
`;
