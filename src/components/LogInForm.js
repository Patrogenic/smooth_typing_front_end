import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../reducers/userReducer';

const LogInForm = ({ showRegister }) => {
  const dispatch = useDispatch();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleLogIn = async (event) => {
    event.preventDefault();
    dispatch(logIn(username, password));
  }

  return(
    <div>
      <form className="fade" onSubmit={handleLogIn}>
        <div className="inputWrapper">
          <input className="textField" value={username} placeholder="Username" onChange={handleUsernameChange} />
        </div>
        <div className="inputWrapper">
          <input className="textField" value={password} placeholder="Password" onChange={handlePasswordChange} type="password" />
        </div>

        <div className="inputWrapper">
          <button className="submitBtn" type="submit">Log In</button>
        </div>
        <div style={{textAlign: "center"}}>New user? <button className="switchViewsBtn" onClick={showRegister}>Create New Account</button></div>
      </form>
    </div>
  )
}

export default LogInForm;