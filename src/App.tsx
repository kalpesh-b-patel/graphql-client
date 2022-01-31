import { gql, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import {
  ActionType,
  AuthContext,
} from './contexts/AuthContext';

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
  const { state, dispatch } = useContext(AuthContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error...</h1>;
  }

  const { posts } = data;
  return (
    <div>
      <h1>This is a GraphQL Client: { state.user } </h1>
      <p>ID: {posts[0].id}</p>
      <p>Title: {posts[0].title}</p>
      <p>Description: {posts[0].description}</p>
      <button onClick={() => dispatch({ type: ActionType.Login })}>Login</button>
    </div>
  );
}

export default App;
