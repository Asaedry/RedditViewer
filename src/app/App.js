import './App.css';
import React from 'react'
import { PostList } from '../components/postList/postList';
import { Search } from '../components/search/search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Route path='/'>
          <Search />
        </Route>
        <Route path='/:url' >
          <PostList /> 
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
