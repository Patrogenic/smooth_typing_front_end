import { Link } from 'react-router-dom';

const Menu = ({ loggedIn }) => {

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

  return(
    <div>
      <div style={navWrapperStyles}>
        <nav style={navStyles}>
          <Link to="/" style={navItemStyles}>Home</Link>
          <Link to="/test" style={navItemStyles}>Test</Link>
          {/* <Link to="/about" style={navItemStyles}>About</Link> */}

          {loggedIn ? 
            <Link to="/dashboard" style={navItemStyles}>Dashboard</Link> :
            <Link to="/login" style={navItemStyles}>Log In</Link>}
        </nav>
      </div>
      <div style={spacerStyles}></div>
    </div>
  )
}

export default Menu;