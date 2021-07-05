import React from "react";
import styled from "styled-components";
import { selectUser } from "../features/userSlice";
import { auth, provider } from "../firebase";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
const Login = () => {
  const user = useSelector(selectUser);

  const signInHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((user) => {
        console.log("userr...", user);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <Container>
      {user && <Redirect to="/home"></Redirect>}
      {!user && (
        <Content>
          <BgImage />
          <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <LoginButton onClick={signInHandler}>GET ALL THERE</LoginButton>
            <LoginText>
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription. As of 03/26/21, the price of
              Disney+ and The Disney Bundle will increase by $1.
            </LoginText>
            <CTALogoTwo src="/images/cta-logo-two.png"></CTALogoTwo>
          </CTA>
        </Content>
      )}
    </Container>
  );
};

const LoginButton = styled.a`
  width: 100%;
  max-width: 600px;
  height: 50px;
  margin-bottom: 12px;
  word-spacing: 2px;
  letter-spacing: 1.3px;
  font-size: 18px;
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  border: none;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px 0;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
const LoginText = styled.p`
  width: 100%;
  max-width: 580px;
  font-size: 11px;
  margin-bottom: 20px;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;
const CTALogoTwo = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  width: 100%;
  display: block;
  object-fit: contain;
`;
const CTA = styled.div`
  /* margin-bottom: ; */
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  transition-timing-function: ease-out;
  transition: opacity 2s;
  /* width: 100%; */
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  width: 100%;
  display: block;
  object-fit: contain;
`;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  height: 100vh;
  flex-direction: column;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;

  background-position: top;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-size: cover;
`;

export default Login;
