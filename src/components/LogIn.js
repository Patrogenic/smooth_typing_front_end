import { useState } from 'react';
import { useSelector } from 'react-redux';
import './LogIn.css';
import LogInForm from './LogInForm';
import RegisterForm from './RegisterForm';

const LogIn = () => {
  const [ toggleLogInRegister, setToggleLogInRegister ] = useState("login");
  const userData = useSelector(state => state.user);

  const containerStyles = {
    position: "relative",
    backgroundColor: "white",
    width: 350,
    height: 400,
    padding: 15,
    margin: "0 auto",
    fontSize: 20,
    borderRadius: 10,
    boxShadow: "5px 5px 15px #075d8f",
  }

  const showRegister = () => {
    setToggleLogInRegister("register");
  }

  const showLogIn = () => {
    setToggleLogInRegister("login");
  }

  return(
    <div style={containerStyles}>
      {toggleLogInRegister === "login" && <LogInForm showRegister={showRegister} />}
      {toggleLogInRegister === "register" && <RegisterForm showLogIn={showLogIn} /> }
      <div>{userData.authErrors}</div>
    </div>
  )
}

export default LogIn;