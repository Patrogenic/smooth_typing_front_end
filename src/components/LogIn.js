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
  const userData = useSelector(state => state.user);


  const logInStyles = {
    position: "relative",
    backgroundColor: "white",
    width: 600,
    height: 400,
    padding: 10,
    margin: "0 auto",
    fontSize: 20,
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

  const handleLogIn = (event) => {
    event.preventDefault();

    //clear fields?

    dispatch(logIn(username, password));
  }

  const handleRegister = (event) => {
    event.preventDefault();

    dispatch(register(username, password, passwordConfirmed));
  }

  return(
    <div style={logInStyles}>

      <form onSubmit={handleLogIn}>

        <div>
          Username: <input autoFocus value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          Password: <input value={password} onChange={handlePasswordChange} type="password" />
        </div>

        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleRegister}>

        <div>
          Username: <input value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          Password: <input value={password} onChange={handlePasswordChange} type="password" />
        </div>
        <div>
          Confirm Password: <input value={passwordConfirmed} onChange={handlePasswordConfirmedChange} type="password" />
        </div>

        <button type="submit">Submit</button>
      </form>
      
      <div>{userData.authErrors}</div>


    </div>
  )

}

export default LogIn;