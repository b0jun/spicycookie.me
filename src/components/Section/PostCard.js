import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Block = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 16px 0px;
  border-radius: 20px;
  background: ${props => props.theme.palette.subBlack};
  transition: transform 500ms;
  &:hover {
    transform: translateY(-5px);
  }
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    &:hover {
      transform: unset;
    }
  }
`;
const Title = styled.h1`
  font-size: 1.4rem;
  color: ${props => props.theme.palette.mainWhite};
  padding-bottom: 0.8rem;
`;
const Description = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.palette.description};
  padding-bottom: 1.3rem;
  font-weight: 500;
  line-height: 1.2rem;
`;
const Date = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.palette.dateFont};
  padding-bottom: 0.8rem;
`;
const Label = styled.p`
  font-size: 0.9rem;
`;

const Name = styled.span`
  padding: 3px 6px;
  border-radius: 15px;
  ${props => {
    if (props.category === 'category1') {
      return css`
        background: ${props => props.theme.palette.brightRed};
      `;
    }
    if (props.category === 'category2') {
      return css`
        background: ${props => props.theme.palette.brightBlue};
      `;
    }
    if (props.category === '웹 개발') {
      return css`
        background: ${props => props.theme.palette.brightGreen};
      `;
    }
    /* [category]: 색 설정 시 해당 카테고리 명으로 추가 */
    return css`
      background: ${props => props.theme.palette.mainWhite};
    `;
  }};
`;
const Cover = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 20px;
  img {
    border-radius: 20px;
  }
  /* Img의 부모스타일 요소에 접근은 class 요소를 통해서 밖에없는가?? */
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
const Info = styled.div`
  width: calc(100% - 180px);
  padding-left: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const PostWrapper = styled.div`
  display: flex;
  padding: 20px;
  @media screen and (max-width: ${props => props.theme.responsive.largest}) {
    ${Cover} {
      width: 150px;
      height: 150px;
    }
    ${Info} {
      width: calc(100% - 170px);
    }
    ${Title} {
      font-size: 1.3rem;
    }
    ${Description} {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    ${Cover} {
      width: 140px;
      height: 140px;
    }
    ${Info} {
      width: calc(100% - 160px);
    }
    ${Title} {
      font-size: 1.2rem;
      padding-bottom: 0.8rem;
    }
    ${Date} {
      font-size: 0.8rem;
      padding-bottom: 0.8rem;
    }
    ${Description} {
      padding-bottom: 1rem;
      line-height: 1rem;
    }
    ${Label} {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
    ${Cover} {
      width: 130px;
      height: 130px;
    }
    ${Info} {
      width: calc(100% - 150px);
    }
    ${Title} {
      font-size: 1.1rem;
      padding-bottom: 0.6rem;
    }
    ${Date} {
      font-size: 0.8rem;
      padding-bottom: 0.6rem;
    }
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    ${Cover} {
      width: 120px;
      height: 120px;
    }
    ${Info} {
      width: calc(100% - 140px);
    }
    ${Title} {
      font-size: 1rem;
      padding-bottom: 0.6rem;
    }
    ${Date} {
      font-size: 0.7rem;
      padding-bottom: 0.4rem;
    }
    ${Description} {
      font-size: 0.7rem;
    }
  }
`;
const PostCard = ({ post }) => {
  const { title, date, category } = post.frontmatter;
  const { excerpt } = post;
  const cover = post.frontmatter.cover.childImageSharp.fluid;
  return (
    <Block>
      <Link to={post.fields.slug}>
        <PostWrapper>
          <Cover>
            <Img fluid={cover} />
          </Cover>
          <Info>
            <Title>{title}</Title>
            <Date>{date}</Date>
            <Description>{excerpt}</Description>
            <Label>
              <Name category={category}>{category}</Name>
            </Label>
          </Info>
        </PostWrapper>
      </Link>
    </Block>
  );
};

export default PostCard;
