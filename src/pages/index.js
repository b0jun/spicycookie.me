import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Category from '../components/Section/Category';
import PostCard from '../components/Section/PostCard';

const IndexPage = () => {
  return (
    <Layout>
      <Category />
      <PostCard />
    </Layout>
  );
};

export default IndexPage;
