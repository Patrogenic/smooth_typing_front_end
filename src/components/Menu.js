import { Link } from "react-router-dom"

const Menu = () => {

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


  // Think about names for the menu items
  return(
    <div style={navWrapperStyles}>
      <nav style={navStyles}>
        <Link to="/" style={navItemStyles}>Home</Link>
        <Link to="/about" style={navItemStyles}>About</Link>
        <Link to="/login" style={navItemStyles}>Log In</Link>
      </nav>
    </div>
  )
}

export default Menu;