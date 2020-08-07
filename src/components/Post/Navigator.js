import React from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Block = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Item = styled.div`
  margin-bottom: 1.1rem;
  &:first-child {
    flex-grow: 1;
  }
  &:last-child {
    flex-grow: 1;
    text-align: right;
  }
`;
const StyledButton = styled(Button)`
  font-size: 0.8rem;
  padding: 5px 8px;
  color: ${props => props.theme.palette.postNavBtn};
  border: 2px solid ${props => props.theme.palette.postNavBtn};
  &:hover {
    color: #eee;
    background: ${props => props.theme.palette.postNavBtn};
  }
`;
export default ({ pageContext }) => {
  const { previous, next } = pageContext;
  return (
    <Block>
      <Item>
        {previous !== null && (
          <StyledButton to={previous.fields.slug}>
            <FaChevronLeft size={9} style={{ marginRight: '6px' }} />
            {previous.frontmatter.title.length > 30
              ? `${previous.frontmatter.title.slice(0, 30)}...`
              : previous.frontmatter.title}
          </StyledButton>
        )}
      </Item>
      <Item>
        {next !== null && (
          <StyledButton to={next.fields.slug}>
            {next.frontmatter.title.length > 30
              ? `${next.frontmatter.title.slice(0, 30)}...`
              : next.frontmatter.title}
            <FaChevronRight size={9} style={{ marginLeft: '6px' }} />
          </StyledButton>
        )}
      </Item>
    </Block>
  );
};
