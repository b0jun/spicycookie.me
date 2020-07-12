import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Block = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;
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
  span {
    background: ${props => props.theme.palette.brightRed};
    padding: 3px 6px;
    border-radius: 8px;
    color: ${props => props.theme.palette.mainBlack};
  }
`;

const Cover = styled.div`
  background: white;
  width: 160px;
  height: 160px;
  border-radius: 20px;
`;
const Info = styled.div`
  width: calc(100% - 180px);
  padding-left: 20px;
  font-weight: bold;
`;
const PostWrapper = styled.div`
  display: flex;
  padding: 20px;

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
      font-size: 0.8rem;
      padding-bottom: 1rem;
      line-height: 1rem;
    }
    ${Label} {
      font-size: 0.8rem;
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
      font-size: 1.1rem;
      padding-bottom: 0.6rem;
    }
    ${Date} {
      font-size: 0.8rem;
      padding-bottom: 0.6rem;
    }
  }
`;
const PostCard = ({ post }) => {
  const { title, date, category } = post.frontmatter;
  const { excerpt } = post;
  return (
    <Block>
      <Link to={post.fields.slug}>
        <PostWrapper>
          <Cover></Cover>
          <Info>
            <Title>{title}</Title>
            <Date>{date}</Date>
            <Description>{excerpt}</Description>
            <Label>
              <span>{category}</span>
            </Label>
          </Info>
        </PostWrapper>
      </Link>
    </Block>
  );
};

export default PostCard;
