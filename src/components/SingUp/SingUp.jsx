import React from 'react';
import padlock from '../../img/padlock.png'
import SingIn from '../SingIn/SingIn'
import { 
  BrowserRouter,
  Switch,
  Route,
  Link
 } from 'react-router-dom'

const SingUp = () => {
  return (
    <BrowserRouter>
    <section className="Sing">
      <div className="Sing__logo">
        <img src={padlock} alt={padlock} />
      </div>
      <div className="Sing__title">
        Sing Up
      </div>
      <form className="Sing__form">
        <div className="Sing__name">
          <input className="Sing__input-text name" type="text" name="FirstName" placeholder="First Name *" />
          <input className="Sing__input-text name" type="text" name="LastName" placeholder="Last Name *" />
        </div>
        <input className="Sing__input-text" type="email" name="email" placeholder="Email Address *" />
        <input className="Sing__input-text" type="password" name="password" placeholder="Password *" />
        <span className="Sing__input-checkbox"><input type="checkbox" name="checkbox" id="checkbox" /><label>Remember me</label></span>
        <input className="Sing__input-button" type="button" name="button" value="Sing In" />
      </form>
      <div className="Sing__links">
        <div className="Sing__link">
          <a href="http://google.com/">Forgot Password?</a>
        </div>
        <div className="Sing__link"> 
          <Link to="/">Already have an account? SingIn</Link>
        </div>
      </div>
      <footer>
        <div className="Sing__footer">
          Copyright &copy; Your Website 2021.
        </div>
      </footer>
    </section>
    </BrowserRouter>
  )
}

export default SingUp;