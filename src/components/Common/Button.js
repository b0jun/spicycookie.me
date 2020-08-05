import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const buttonStyle = css`
  font-size: 1rem;
  font-weight: 500;
  transition: all 300ms;
  border-radius: 15px;
  border: 2px solid ${props => props.theme.palette.mainBackground};
  padding: 7px 12px;
  color: ${props => props.theme.palette.mainBackground};
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.palette.mainBackground};
    color: #eeeeee;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = props => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

export default Button;
