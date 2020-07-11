import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Block = styled.div`
  font-size: 3rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Description = styled.p`
  font-size: 1rem;
`;

const Date = styled.p`
  font-size: 0.9rem;
`;

const Label = styled.p`
  font-size: 0.9rem;
`;

const SLink = styled(Link)``;

const PostCard = ({ post }) => {
  return (
    <Block>
      <SLink to={post.node.fields.slug}>
        <Title>{post.node.frontmatter.title}</Title>
        <Description>{post.node.excerpt}</Description>
        <Date>{post.node.frontmatter.date}</Date>
        <Label>{post.node.frontmatter.category}</Label>
      </SLink>
    </Block>
  );
};

export default PostCard;
