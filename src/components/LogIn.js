import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, register } from '../reducers/userReducer';
// import userService from '../services/userService';


//should have front end form validation
const LogIn = () => {
  const dispatch = useDispatch();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirmed, setPasswordConfirmed ] = useState('');
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

  const planBtnStyles = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    color: "#0000EE",
  }
  
  const headerTextStyle = {
    fontWeight: 400,
    textAlign: "center",
  }

  const footerTextStyle = {
    textAlign: "center",
  }

  const registerBtnStyle = {
    
  }

  const logInBtnStyle = {
    border: "none",
    backgroundColor: "green",
    color: "white",
    width: "100%",
    height: 50,
    fontSize: 30,
    fontFamily: "inherit",
  }

  const inputWrapperStyles = {
    width: "100%",
    display: "flex",
    marginBottom: 10,
    justifyContent: "center",
  }

  const inputStyles = {
    margin: "0 auto",
    padding: 10,
    width: "100%",
    fontSize: 20,
    borderRadius: 5,
    border: "1px grey solid",
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handlePasswordConfirmedChange = (event) => {
    setPasswordConfirmed(event.target.value);
  }

  const handleLogIn = async (event) => {
    event.preventDefault();

    //clear fields?

    dispatch(logIn(username, password));
    console.log(userData)
  }

  const handleRegister = (event) => {
    event.preventDefault();

    dispatch(register(username, password, passwordConfirmed));
  }

  const showRegister = () => {
    setToggleLogInRegister("register");
  }

  const showLogIn = () => {
    setToggleLogInRegister("login");
  }

  return(
    <div style={containerStyles}>

      {toggleLogInRegister === "login" && <form className="fade" onSubmit={handleLogIn}>
        {/* <h1 style={headerTextStyle}>Sign-In</h1> I'll have to fix the font style */}

        <div style={inputWrapperStyles}>
          <input style={inputStyles} value={username} placeholder="Username" onChange={handleUsernameChange} />
        </div>
        <div style={inputWrapperStyles}>
          <input style={inputStyles} value={password} placeholder="Password" onChange={handlePasswordChange} type="password" />
        </div>

        <div style={inputWrapperStyles}>
          <button style={logInBtnStyle} type="submit">Log In</button>
        </div>
        <div style={footerTextStyle}>New user? <button style={planBtnStyles} onClick={showRegister} className="underline">Create New Account</button></div>
      </form>}

      {toggleLogInRegister === "register" && <form className="fade" onSubmit={handleRegister}>
        {/* <h1 style={headerTextStyle}>Create account</h1> I'll have to fix the font style */}

        <div style={inputWrapperStyles}>
           <input style={inputStyles} value={username} placeholder="Username" onChange={handleUsernameChange} />
        </div>
        <div style={inputWrapperStyles}>
          <input style={inputStyles} value={password} placeholder="Password" onChange={handlePasswordChange} type="password" />
        </div>
        <div style={inputWrapperStyles}>
          <input style={inputStyles} value={passwordConfirmed} placeholder="Confirm Password" onChange={handlePasswordConfirmedChange} type="password" />
        </div>

        <div style={inputWrapperStyles}>
          <button style={logInBtnStyle} type="submit">Register</button>
        </div>
        <div style={footerTextStyle}>Already have an account?<button style={planBtnStyles} className="underline" onClick={showLogIn}>Log In</button></div>

      </form>}

      

      
      <div>{userData.authErrors}</div>


    </div>
  )

}

export default LogIn;