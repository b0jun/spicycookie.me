import React from 'react';
import styled, { css } from 'styled-components';
import { useState } from 'react';
const Block = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
const Toggle = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 28px;
  height: 30px;
  span:after,
  span:before {
    content: '';
    position: absolute;
    left: 0;
    top: -9px;
  }
  span:after {
    top: 9px;
  }
  span {
    position: relative;
    display: block;
  }

  span,
  span:after,
  span:before {
    width: 100%;
    height: 5px;
    background-color: ${props => props.theme.palette.headerTitle};
    transition: all 0.3s;
    backface-visibility: hidden;
    border-radius: 2px;
  }

  /* active Button */
  ${props =>
    props.isOpen &&
    css`
      span {
        background-color: transparent;
      }
      span:before {
        transform: rotate(45deg) translate(5px, 5px);
      }
      span:after {
        transform: rotate(-45deg) translate(7px, -8px);
      }
      & {
        opacity: 1;
        visibility: visible;
      }
    `}
`;

const Menu = styled.ul`
  ${props =>
    props.isOpen
      ? css`
          visibility: visible;
          opacity: 0.9;
          transition: visibility 0s linear 0s, opacity 300ms;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transition: visibility 0s linear 300ms, opacity 300ms;
        `}
  z-index: 1000;
  position: absolute;
  top: 65px;
  right: -5px;
  outline: none;
  list-style: none;
  display: flex;
  align-items: center;
  background: #848ccf;
  border-radius: 20px;
  height: 20px;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    padding: 10px;
    background: #848ccf;
    border-radius: 100%;
    &:last-child {
      position: relative;
      &:after {
        border-color: transparent transparent #848ccf transparent;
        border-style: solid;
        border-width: 0 10px 15px 10px;
        content: '';
        width: 0;
        height: 0;
        position: absolute;
        top: -10px;
        left: 10px;
      }
    }
  }
`;
const Item = styled.div`
  width: 15px;
  height: 15px;
  border: 2px solid white;
  border-radius: 100%;
  cursor: pointer;
`;
const ThemeChanger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Block>
      <Toggle
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span></span>
      </Toggle>
      <Menu tabIndex={0} isOpen={isOpen} onBlur={() => setIsOpen(false)}>
        <li>
          <Item style={{ background: '#3f72af' }}></Item>
        </li>
        <li>
          <Item style={{ background: '#b9bbdf' }}></Item>
        </li>
        <li>
          <Item style={{ background: '' }}></Item>
        </li>
      </Menu>
    </Block>
  );
};

export default ThemeChanger;
