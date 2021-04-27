import React from 'react';
import './App.scss';
import SingIn from './components/SingIn/SingIn';
import SingUp from './components/SingUp/SingUp';
import {
  Route,
  HashRouter,
  
 } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/">
          <SingIn />
        </Route>
        <Route path="/register">
          <SingUp />
        </Route>
      </HashRouter>
    </div>
  );
}

export default App;
