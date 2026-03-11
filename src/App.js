import React from 'react';
import { PostProvider } from './PostContext';
import CardList from './CardList';

function App() {
  return (
    <PostProvider>
      <CardList />
    </PostProvider>
  );
}

export default App;