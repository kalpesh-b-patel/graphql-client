import { gql, useQuery } from '@apollo/client';
import React from 'react';

const PRODUCTS = gql`
  query GetPosts {
    posts {
      id
      title
      description
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(PRODUCTS);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  const { posts } = data;
  return (
    <div>
      <h1>This is a GraphQL Client</h1>
      <p>ID: {posts[0].id}</p>
      <p>Title: {posts[0].title}</p>
      <p>Description: {posts[0].description}</p>
    </div>
  );
}

export default App;
