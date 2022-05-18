import './App.css';
import React from 'react'
import { PostList } from '../components/postList/postList';
import { Search } from '../components/search/search';

function App() {

  // redditAPI();

  return (
    <div className="App">
      <Search />
      <PostList />
    </div>
  );
}

export default App;
