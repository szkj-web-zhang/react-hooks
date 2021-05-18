import React, { useContext } from " react";
import { UserContext } from "./userContext";

const Home = () => {
  const message = useContext(UserContext);

  return (
    <div>
      <h2>Home</h2>
      <div>{message}</div>
    </div>
  );
};

export default Home;
