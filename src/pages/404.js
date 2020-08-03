import React from 'react';
import Layout from '../components/Common/Layout';
import styled from 'styled-components';

const Block = styled.div`
  font-family: 'Bangers', cursive;
  font-size: 6rem;
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <Block>Oops! File Not Found404</Block>
      The requested URL /asddsadsaas was not found on this server
    </Layout>
  );
};

export default NotFoundPage;
