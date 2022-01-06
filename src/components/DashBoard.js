import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../reducers/userReducer";

const DashBoard = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);

  const dashboardStyles = {
    position: "relative",
    backgroundColor: "white",
    width: 900,
    height: 500,
    padding: 10,
    margin: "0 auto",
    fontSize: 20,
  }

  const buttonStyle = {
    position: "absolute",
    top: 40,
    right: 50,
    backgroundColor: "#db9a2a",
    borderRadius: 3,
    padding: 5,
    border: "none",
    fontSize: 15,
  }

  const listItemStyle = {
    paddingTop: 10,
    height: 30,
    borderBottom: "1px solid black",
  }

  const handleLogOut = () => {
    dispatch(logOut());
    window.location.reload();
  }

  return(
    <div style={dashboardStyles}>
      <h2>Dashboard: {userData.username}</h2>
      <h3>Recent Tests</h3>
      {userData.typingData.map((data, index) => 
        <div key={index}>
          <div style={listItemStyle}><span style={{fontWeight: "bold"}}>{index + 1} </span>WPM: {data.wpm} Time: {data.time} Accuracy: {data.accuracy}%</div>
        </div>
      )}
      <div><button style={buttonStyle} className="hover" onClick={handleLogOut}>Log Out</button></div>
    </div>
  )
}

export default DashBoard;