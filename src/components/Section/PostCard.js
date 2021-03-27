import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import default_img from '../../../content/blog/images/default.jpg';

// const Block = styled.div`
//   font-size: 3rem;
//   margin-bottom: 1.5rem;
//   box-shadow: 0px 2px 4px ${props => props.theme.commonColor.shadow};
//   border-radius: 20px;
//   background: ${props => props.theme.palette.postCardBackground};
//   transition: transform 500ms;
//   &:hover {
//     transform: translateY(-5px);
//   }
//   @media screen and (max-width: ${props => props.theme.responsive.large}) {
//     width: 100%;
//     &:hover {
//       transform: unset;
//     }
//   }
//   width: calc(50% - 20px);
//   margin: 10px;
// `;
// const Title = styled.h1`
//   font-size: 1.1rem;
//   color: ${props => props.theme.palette.mainFont};
//   padding-bottom: 0.8rem;
// `;
// const Description = styled.p`
//   font-weight: 300;
//   font-size: 0.9rem;
//   color: ${props => props.theme.palette.postCardDesc};
//   padding-bottom: 1.3rem;
//   line-height: 1.2rem;
// `;
// const Date = styled.p`
//   font-size: 0.8rem;
//   color: ${props => props.theme.palette.postCardDate};
//   padding-bottom: 0.8rem;
// `;
// const Label = styled.p`
//   font-size: 0.9rem;
// `;

// const Name = styled.span`
//   box-shadow: 0px 2px 4px ${props => props.theme.commonColor.shadow};
//   padding: 3px 10px;
//   border-radius: 15px;
//   background: ${props => (props.labelColor ? props.labelColor : 'white')};
// `;
// const Cover = styled.div`
//   box-shadow: 0px 2px 4px ${props => props.theme.commonColor.shadow};
//   width: 150px;
//   height: 150px;
//   border-radius: 20px;
//   img {
//     border-radius: 20px;
//   }
//   .gatsby-image-wrapper {
//     width: 100%;
//     height: 100%;
//   }
// `;

// const DefaultImage = styled.img`
//   width: 100%;
//   height: 100%;
// `;
// const Info = styled.div`
//   width: calc(100% - 180px);
//   padding-left: 20px;
//   font-weight: 500;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;
// const PostWrapper = styled.div`
//   display: flex;
//   padding: 20px;
//   @media screen and (max-width: ${props => props.theme.responsive.largest}) {
//     ${Cover} {
//       width: 150px;
//       height: 150px;
//     }
//     ${Info} {
//       width: calc(100% - 170px);
//     }
//     ${Title} {
//       font-size: 1.2rem;
//     }
//     ${Description} {
//       font-size: 0.8rem;
//     }
//   }
//   @media screen and (max-width: ${props => props.theme.responsive.large}) {
//     ${Cover} {
//       width: 140px;
//       height: 140px;
//     }
//     ${Info} {
//       width: calc(100% - 160px);
//     }
//     ${Title} {
//       padding-bottom: 0.8rem;
//     }
//     ${Date} {
//       padding-bottom: 0.8rem;
//     }
//     ${Description} {
//       padding-bottom: 1rem;
//       line-height: 1rem;
//     }
//     ${Label} {
//       font-size: 0.8rem;
//     }
//   }
//   @media screen and (max-width: ${props => props.theme.responsive.medium}) {
//     ${Cover} {
//       width: 130px;
//       height: 130px;
//     }
//     ${Info} {
//       width: calc(100% - 150px);
//     }
//     ${Title} {
//       font-size: 1.1rem;
//       padding-bottom: 0.6rem;
//     }
//     ${Date} {
//       padding-bottom: 0.6rem;
//     }
//   }
//   @media screen and (max-width: ${props => props.theme.responsive.small}) {
//     ${Cover} {
//       width: 120px;
//       height: 120px;
//     }
//     ${Info} {
//       width: calc(100% - 140px);
//     }
//     ${Title} {
//       font-size: 1rem;
//       padding-bottom: 0.6rem;
//     }
//     ${Date} {
//       font-size: 0.7rem;
//       padding-bottom: 0.4rem;
//     }
//     ${Description} {
//       font-size: 0.7rem;
//     }
//   }
// `;

const Block = styled.div`
  background: ${props => props.theme.palette.postCardBackground};
  margin: 0.7rem;
  width: calc(25% - 1.4rem);
  padding: 0.6rem;
  box-sizing: border-box;
  border-radius: 15px;
  transition: transform 500ms;
  &:hover {
    transform: translateY(-5px);
  }
  @media screen and (max-width: 1150px) {
    width: calc(33.3% - 1.4rem);
  }
  @media screen and (max-width: 650px) {
    width: calc(50% - 1.4rem);
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    &:hover {
      transform: unset;
    }
    width: 100%;
    margin: 0;
    margin-bottom: 1rem;
  }
`;
const Title = styled.h1`
  color: ${props => props.theme.palette.mainFont};
  line-height: 1.1rem;
`;
const SubTitle = styled.p`
  color: ${props => props.theme.palette.postCardDesc};
  font-size: 0.8rem;
  line-height: 1.1rem;
`;
const Date = styled.p`
  color: ${props => props.theme.palette.postCardDate};
  font-size: 0.8rem;
`;
const Label = styled.p`
  margin: 1rem 0;
`;
const Name = styled.span`
  box-shadow: 0px 2px 4px ${props => props.theme.commonColor.shadow};
  padding: 3px 10px;
  border-radius: 15px;
  background: ${props => (props.labelColor ? props.labelColor : 'white')};
`;
const Cover = styled.div`
  margin-bottom: 0.7rem;
  img {
    border-radius: 15px;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      width: 120px;
      height: 120px;
    }
  }

  .default {
    width: 100%;
    height: 100%;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      width: 120px;
      height: 120px;
    }
  }
`;

const Info = styled.div`
  .item {
    margin-bottom: 0.5rem;
  }
`;
const PostWrapper = styled.div`
  @media screen and (max-width: ${props => props.theme.responsive.largest}) {
    ${Label} {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: ${props => props.theme.responsive.medium}) {
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    display: flex;
    ${Cover} {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
`;

const PostCard = ({ post, categories }) => {
  const { title, date, category, subtitle } = post.frontmatter;
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
            {cover ? (
              <Img fluid={cover} />
            ) : (
              <img className="default" src={default_img} alt="default_img" />
            )}
          </Cover>
          <Info>
            <Date className="item">{date}</Date>
            <Title className="item">{title}</Title>
            <SubTitle className="item">{subtitle && subtitle}</SubTitle>
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
