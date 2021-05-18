import React, { useMemo } from "react";
import { BrowserRouter as Router, Link, route } from "react-router-dom";
import Usestate from "../useState/Usestate";
import About from "./About";
import Home from "./Home";
import { UserContext } from "./userContext";

const login = async () => {
  return {
    id: 3,
    username: "cclin",
    email: "cclin@tx.qq",
  };
};

const Context = () => {
  const [user, setUser] = Usestate(null);
  const userProvider = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <link to="/">Home</link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <UserContext.Provider value={userProvider}>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default Context;
