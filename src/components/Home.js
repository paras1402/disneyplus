import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Redirect } from "react-router-dom";
const Home = () => {
  const user = useSelector(selectUser);

  return <div>{!user && <Redirect to="/"></Redirect>}</div>;
};

export default Home;
