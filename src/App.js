import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import About from "./components/About"
import TypingTestContainer from "./components/TypingTestContainer"

const App = () => {
  return (
    <Router>
      <Menu />

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          {/* login */}
        </Route>
        <Route path="/dashboard">
          {/* user profile */}
        </Route>

        <Route exact path="/">
          <TypingTestContainer />
        </Route>

      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
