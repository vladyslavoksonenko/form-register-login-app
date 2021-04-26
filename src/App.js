import React from 'react';
import './App.scss';
import SingIn from './components/SingIn/SingIn';
import SingUp from './components/SingUp/SingUp';
import { 
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link
 } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <SingIn />
        </Route>
        <Route path="/register">
          <SingUp />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
