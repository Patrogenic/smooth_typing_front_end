import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import About from "./components/About"
import LogIn from "./components/LogIn"
import TypingTestContainer from "./components/TypingTestContainer"
import DashBoard from "./components/DashBoard"
import userService from "./services/userService"
import Test from "./components/Test"
import { logOut } from "./reducers/userReducer"
import { aboutText } from './data/textData'

const App = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);

  useEffect(() => {
    if(localStorage.getItem('token')){
      userService.validate().then(response => {}, error => {
        localStorage.removeItem('token');
        dispatch(logOut());
      })
    }
  }, [])

  return (
    <Router>
      <Menu />

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/login">
          {userData.username ? <Redirect to="/dashboard" /> : <LogIn />}
        </Route>
        <Route path="/dashboard">
          {!userData.username ? <Redirect to="/login" /> : <DashBoard />}
        </Route>

        <Route exact path="/">
          <TypingTestContainer type="site intro" text={aboutText[0]}/>
        </Route>

      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
