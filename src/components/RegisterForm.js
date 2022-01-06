import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../reducers/userReducer';

const Register = ({ showLogIn }) => {
  const dispatch = useDispatch();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirmed, setPasswordConfirmed ] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handlePasswordConfirmedChange = (event) => {
    setPasswordConfirmed(event.target.value);
  }

  const handleRegister = (event) => {
    event.preventDefault();
    dispatch(register(username, password, passwordConfirmed));
  }

  return(
    <div>
      <form className="fade" onSubmit={handleRegister}>
        <div className="inputWrapper">
           <input className="textField" value={username} placeholder="Username" onChange={handleUsernameChange} />
        </div>
        <div className="inputWrapper">
          <input className="textField" value={password} placeholder="Password" onChange={handlePasswordChange} type="password" />
        </div>
        <div className="inputWrapper">
          <input className="textField" value={passwordConfirmed} placeholder="Confirm Password" onChange={handlePasswordConfirmedChange} type="password" />
        </div>

        <div className="inputWrapper">
          <button className="submitBtn" type="submit">Register</button>
        </div>
        <div style={{textAlign: "center"}}>Already have an account?<button className="switchViewsBtn" onClick={showLogIn}>Log In</button></div>
      </form>
    </div>
  )
}

export default Register;