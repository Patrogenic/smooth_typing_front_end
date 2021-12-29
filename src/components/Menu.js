import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import userService from '../services/userService';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../reducers/userReducer';

const Menu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);

  const navWrapperStyles = {
    backgroundColor: "lightBlue",
    padding: 10,
  }

  const navStyles = { 
    display: "flex",
    justifyContent: "space-around",
    maxWidth: 600,
    margin: "0 auto",
    backgroundColor: "lightBlue",
  }
  const navItemStyles = {
    textDecoration: "none",
    color: "black",
  }

  const spacerStyles = {
    height: 100,
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      userService.validate().then(response => {}, error => {
        localStorage.removeItem('token');
        dispatch(logOut());
      })
    }
  }, [])


  // Think about names for the menu items
  return(
    <div>
      <div style={navWrapperStyles}>
        <nav style={navStyles}>
          <Link to="/" style={navItemStyles}>Home</Link>
          <Link to="/test" style={navItemStyles}>Test</Link>
          <Link to="/about" style={navItemStyles}>About</Link>

          {userData.username ? 
            <Link to="/dashboard" style={navItemStyles}>Dashboard</Link> :
            <Link to="/login" style={navItemStyles}>Log In</Link>}
        </nav>
      </div>
      <div style={spacerStyles}></div>
    </div>
  )
}

export default Menu;