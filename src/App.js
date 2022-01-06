import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom"
import { useEffect, useState } from "react";
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
  const introTest = useSelector(state => state.introTest);
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ validated, setValidated ] = useState(false);

  useEffect(async () => {
    if(localStorage.getItem('token')){
      await userService.validate().then(response => {
        setLoggedIn(true);
      }, error => {
        localStorage.removeItem('token');
        dispatch(logOut());
      })
    }
    setValidated(true);
  }, [])

  return (
    <div>
      {validated && <Router>
        <Menu loggedIn={loggedIn}/>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/login">
            {loggedIn ? <Redirect to="/dashboard" /> : <LogIn />}
          </Route>
          <Route path="/dashboard">
            {!loggedIn ? <Redirect to="/login" /> : <DashBoard />}
          </Route>

          <Route exact path="/">
            <TypingTestContainer type="site intro" text={aboutText[introTest.textSlide]}/>
          </Route>
        </Switch>

        <Footer />
      </Router>}
    </div>
  );
}

export default App;
