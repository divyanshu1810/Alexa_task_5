import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const user = true;
  return (
    <Router>
      <TopBar/>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            {user?<Home/> :<Register />}
          </Route>
          <Route exact path="/login">
          {user?<Home/> :<Login />}
          </Route>
          <Route exact path="/settings">
          {user?<Settings/> :<Register />}
          </Route>
          <Route exact path="/post/:postId">
            <Single />
          </Route>
          <Route exact path="/write">
          {user?<Write/> :<Register />}
          </Route>
        </Switch>
      {/* <Home/> */}
      {/* <Single/> */}
      {/* <Write/> */}
      {/* <Settings/> */}
      {/* <Login/> */}
      {/* <Register/> */}
    </Router>
  );
}

export default App;
