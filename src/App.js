import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  const dispatch = useDispatch();

  const history = useHistory();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            name: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header user={user} />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
