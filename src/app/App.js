import './App.css';
import React from 'react'
import { PostList } from '../components/postList/postList';
import { NavBar } from '../components/navBar/navBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Route path='/'>
          <NavBar />
        </Route>
        <Route path='/' >
          <PostList /> 
        </Route>   
      </Router>
      
    </div>
  );
}

export default App;
