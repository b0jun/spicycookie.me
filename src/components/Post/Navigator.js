import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Block = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
`;
const Item = styled.div`
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
  color: ${props => props.theme.palette.brightBlue2};
  border: 2px solid ${props => props.theme.palette.brightBlue2};
  &:hover {
    color: ${props => props.theme.palette.mainFont};
    background: ${props => props.theme.palette.brightBlue2};
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
            {previous.frontmatter.title.length > 12
              ? `${previous.frontmatter.title.slice(0, 12)}...`
              : previous.frontmatter.title}
          </StyledButton>
        )}
      </Item>
      <Item>
        {next !== null && (
          <StyledButton to={next.fields.slug}>
            {next.frontmatter.title.length > 12
              ? `${next.frontmatter.title.slice(0, 12)}...`
              : next.frontmatter.title}
            <FaChevronRight size={9} style={{ marginLeft: '6px' }} />
          </StyledButton>
        )}
      </Item>
    </Block>
  );
};
