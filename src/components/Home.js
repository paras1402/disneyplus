import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Redirect } from "react-router-dom";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import db from "../firebase";
import { setMovies } from "../features/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(setMovies);
  const user = useSelector(selectUser);

  let recommend = [];
  let original = [];
  let trending = [];
  let newDisney = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommend = [...recommend, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];

            break;
          case "original":
            original = [...original, { id: doc.id, ...doc.data() }];

            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];

            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommend,
          newDisney: newDisney,
          trending: trending,
          original: original,
        })
      );
    });
  }, [user]);

  return (
    <Container>
      {!user && <Redirect to="/" />}
      <ImgSlider></ImgSlider>
      <Viewers></Viewers>
      <Recommends></Recommends>
      <NewDisney></NewDisney>
      <Originals></Originals>
      <Trending></Trending>
    </Container>
  );
};

const Container = styled.main`
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  padding: 0px calc(5% - 5px);

  background: url("images/home-background.png") center center / cover no-repeat
    fixed;
  position: absolute;
  inset: 0px;
  top: 72px;
  z-index: -1;
`;
export default Home;
