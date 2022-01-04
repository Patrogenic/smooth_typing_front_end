import { useEffect } from "react";
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

  const handleLogOut = () => {
    dispatch(logOut());
    window.location.reload();
  }

  return(
    <div style={dashboardStyles}>
      Dashboard: {userData.username}
      {userData.typingData.map((data, index) => 
        <div key={index}>
          <div>Test {index}</div>
          <div>WPM: {data.wpm} Time: {data.time} Accuracy: {data.accuracy}%</div>
        </div>
      )}
      <div><button onClick={handleLogOut}>Log Out</button></div>

    </div>
  )
}

export default DashBoard;