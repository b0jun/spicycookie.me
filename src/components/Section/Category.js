import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Block = styled.div``;

const List = styled.ul``;

const Item = styled.li``;

const SLink = styled(Link)``;

const Category = () => {
  return (
    <Block>
      <List>
        <Item>
          <SLink>
            <img alt="" />
          </SLink>
        </Item>
      </List>
    </Block>
  );
};

export default Category;
