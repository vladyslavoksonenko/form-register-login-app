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
        <Route exact path="/form-register-login-app">
          <SingIn />
        </Route>
        <Route path="/form-register-login-app/register">
          <SingUp />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
