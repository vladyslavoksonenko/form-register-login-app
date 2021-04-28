import React, { useState } from 'react';
import padlock from '../../img/padlock.png'
import { 
  Link
 } from 'react-router-dom'

const SingUp = () => {

  const [stateFirstName, setStateFirstName] = useState("");
  const [stateLastName, setStateLastName] = useState("");
  const [stateEmail, setStateEmail] = useState("");
  const [statePassword, setStatePassword] = useState("");
  const [valueEmail, setEmail] = useState("");
  const [valueLastName, setLastName] = useState("");
  const [valueFirstName, setFirstName] = useState("");
  const [valuePassword, setPassword] = useState("");

  function firstNameValidator(e) {
    let regexp = /\w{4,}/g;
      if (regexp.test(e.target.value)) {
        setStateFirstName("acception");
        setFirstName(e.target.value);
      } else {
        setStateFirstName("warning");
      }
  }

  function lastNameValidator(e) {
    const regexp = /\w{4,}/g;
      if (regexp.test(e.target.value)) {
        setStateLastName("acception");
        setLastName(e.target.value);
      } else {
        setStateLastName("warning");
      }
  }

  function emailValidator(e) {
    const regexp = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/;
    if(regexp.test(e.target.value)) {
      setStateEmail("acception");
      setEmail(e.target.value);
    } else {
      setStateEmail("warning");
    }
  }
  function passwordValidator(e) {
    const regexp = /(?=.*[a-z])(?=.*[A-Z]).{8,15}/;
    if (regexp.test(e.target.value)) {
      setStatePassword("acception");
      setPassword(e.target.value);
    } else {
      setStatePassword("warning");
    }
  }

  function registerClick() {
    if (stateFirstName && stateLastName && stateEmail && statePassword === "acception") {
      localStorage.setItem("email", valueEmail);
      localStorage.setItem("password", valuePassword);
    }
  }

  return (
    <section className="Sing">
      <div className="Sing__logo">
        <img src={padlock} alt={padlock} />
      </div>
      <div className="Sing__title">
        Sing Up
      </div>
      <form className="Sing__form">
        <div className="Sing__name">
          <input className={`Sing__input-text first-name ${stateFirstName}`} type="text" name="FirstName" placeholder="First Name *" onChange={firstNameValidator} />
          <input className={`Sing__input-text ${stateLastName}`} type="text" name="LastName" placeholder="Last Name *" onChange={lastNameValidator} />
        </div>
        <div className="Sing__block">
          <input className={`Sing__input-text ${stateEmail}`} type="email" name="email" placeholder="Email Address *" onChange={emailValidator} />
          <input className={`Sing__input-text ${statePassword}`} type="password" name="password" placeholder="Password *" onChange={passwordValidator} />
        </div>
        <span className="Sing__input-checkbox"><input type="checkbox" name="promotions" id="checkbox" /><label>I want to receive inspiration, marketing promotions and updates via email.</label></span>
        <input className="Sing__input-button" type="button" name="button" value="Sing In" onClick={registerClick} />
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
  )
}

export default SingUp;