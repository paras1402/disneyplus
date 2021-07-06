import React from "react";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import { Avatar, Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import StarIcon from "@material-ui/icons/Star";
import TheatersIcon from "@material-ui/icons/Theaters";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import { auth, provider } from "../firebase";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Header = () => {
  const user = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const signInHandler = () => {
    if (!user) {
      auth
        .signInWithPopup(provider)
        .then((user) => {
          console.log("userr...", user);
        })
        .catch((error) => {
          console.log("error", error.message);
        });
    } else {
      auth.signOut().then(() => {
        dispatch(logout());
        history.push("/");
      });
    }
  };
  return (
    <Container>
      <DisneyIcon src="images/logo.svg" />

      {!user && (
        <ButtonComp>
          <Button onClick={signInHandler} variant="outlined">
            Login
          </Button>
        </ButtonComp>
      )}
      {user && (
        <>
          <NavMenu>
            <IconComp>
              <HomeIcon />
              <p>Home</p>
            </IconComp>
            <IconComp>
              <SearchIcon />
              <p>Search</p>
            </IconComp>
            <IconComp>
              <AddIcon />
              <p>WatchList</p>
            </IconComp>
            <IconComp>
              <StarIcon />
              <p>Originals</p>
            </IconComp>
            <IconComp>
              <TheatersIcon />
              <p>Movies</p>
            </IconComp>
            <IconComp>
              <LiveTvIcon />
              <p>Series</p>
            </IconComp>
          </NavMenu>

          <SignOut>
            <Avatar src={user.photo}></Avatar>
            <DropDown onClick={signInHandler}>SignOut</DropDown>
          </SignOut>
        </>
      )}
    </Container>
  );
};

const DropDown = styled.div`
  width: 100px;
  /* background-color: pink; */
  position: absolute;
  top: 48px;
  left: -35px;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(249, 249, 249);
  border-radius: 4px;

  transition: all 0.27s ease-in-out;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  padding: 10px;
  opacity: 0;
  font-size: 14px;
  letter-spacing: 3px;

  border: 2px solid rgb(249, 249, 249);
`;
const SignOut = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    ${DropDown} {
      display: flex;
      opacity: 1;
    }
  }
  /* height: 100%; */
`;

const IconComp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin-left: 20px;
  & > p {
    margin-left: 10px;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    font-weight: 400;
    font-size: 13px;
    color: rgb(249, 249, 249);
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;
    /* border-bottom: 2px solid rgba(249, 249, 249); */
    &:after {
      content: " ";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: -8px;
      border-radius: 25px;
      left: 0;
      background-color: rgb(249, 249, 249);
      transform-origin: bottom left;
      opacity: 0;
      transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
      opacity: 1;
    }
  }
`;
const DisneyIcon = styled.img`
  object-fit: contain;
  height: 50px;
  margin-left: 10px;
`;
const ButtonComp = styled.div`
  & > button {
    color: #f9f9f9 !important;
    border-color: #f9f9f9 !important;
  }
  & > button:hover {
    opacity: 0.5;
  }
  padding-right: 5px;
  margin-right: 10px;
`;
const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: #090b13;
  padding: 0 36px;
  height: 70px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  margin: 0;
  padding: 0;
  margin-right: auto;
  padding-right: 30px;
  margin-left: 15px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export default Header;
