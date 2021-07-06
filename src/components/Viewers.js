import React from "react";
import styled from "styled-components";
const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="images/viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-pixar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-marvel.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-national.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="images/viewers-starwars.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  margin: 0 calc(1%);

  position: relative;
  transition: all 0.25s ease;
  border: 3px solid rgba(249, 249, 249, 0.1);

  & > img {
    /* position: absolute; */
    /* inset: 0px; */
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 1;
  }
  & > video {
    opacity: 0;
    position: absolute;
    inset: 0px;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    & > video {
      opacity: 1;
    }
    transform: scale(1.06);
    border-color: #f9f9f9;
  }

  @media (max-width: 768px) {
    margin-top: 50px;
    /* margin-top: 5px; */
  }
`;

const Container = styled.div`
  margin-top: 20px;
  padding: 30px 0px 26px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    /* margin-top: 5px; */
  }
`;
export default Viewers;
