import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import default_img from '../../../content/blog/images/default.jpg';
const Block = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  box-shadow: 0px 2px 4px ${props => props.theme.commonColor.shadow};
  border-radius: 20px;
  background: ${props => props.theme.palette.postCardBackground};
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
  font-size: 1.3rem;
  color: ${props => props.theme.palette.mainFont};
  padding-bottom: 0.8rem;
`;
const Description = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
  color: ${props => props.theme.palette.postCardDesc};
  padding-bottom: 1.3rem;
  line-height: 1.2rem;
`;
const Date = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.palette.postCardDate};
  padding-bottom: 0.8rem;
`;
const Label = styled.p`
  font-size: 0.9rem;
`;

const Name = styled.span`
  box-shadow: 0px 2px 4px ${props => props.theme.commonColor.shadow};
  padding: 3px 10px;
  border-radius: 15px;
  background: ${props => (props.labelColor ? props.labelColor : 'white')};
`;
const Cover = styled.div`
  box-shadow: 0px 2px 4px ${props => props.theme.commonColor.shadow};
  width: 160px;
  height: 160px;
  border-radius: 20px;
  img {
    border-radius: 20px;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;

const DefaultImage = styled.img`
  width: 100%;
  height: 100%;
`;
const Info = styled.div`
  width: calc(100% - 180px);
  padding-left: 20px;
  font-weight: 500;
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
      font-size: 1.2rem;
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
const PostCard = ({ post, categories }) => {
  const { title, date, category } = post.frontmatter;
  const { excerpt } = post;
  const cover = post.frontmatter.cover?.childImageSharp.fluid;
  let labelColor; // set Label Color
  categories.forEach(el => {
    if (el.name === category) {
      labelColor = el.color;
    }
  });
  return (
    <Block>
      <Link to={post.fields.slug}>
        <PostWrapper>
          <Cover>
            {cover ? <Img fluid={cover} /> : <DefaultImage src={default_img} alt="default_img" />}
          </Cover>
          <Info>
            <Title>{title}</Title>
            <Date>{date}</Date>
            <Description>{excerpt}</Description>
            <Label>
              <Name labelColor={labelColor}>{category}</Name>
            </Label>
          </Info>
        </PostWrapper>
      </Link>
    </Block>
  );
};

export default PostCard;
