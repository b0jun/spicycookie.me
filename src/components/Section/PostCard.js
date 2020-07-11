import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby';

const Block = styled.div`
  font-size: 3rem;
`;

// const SLink = styled(Link)``;

const PostCard = ({ post }) => {
  return (
    <Block>
      {/* <SLink> */}
      {post.node.frontmatter.title}
      {post.node.frontmatter.date}
      {post.node.frontmatter.category}
      {/* </SLink> */}
    </Block>
  );
};

export default PostCard;
