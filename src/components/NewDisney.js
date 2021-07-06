import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectNewDisney } from "../features/movieSlice";
import { useSelector } from "react-redux";

const NewDisney = () => {
  const newdisney = useSelector(selectNewDisney);
  return (
    <Container>
      <h4>New to Disney+</h4>
      <Content>
        {newdisney?.map((movie, key) => (
          <Wrap key={key}>
            <Link to={`/detail/` + movie.id}>
              <img src={movie.cardImg} alt="" />
            </Link>
          </Wrap>
        ))}
      </Content>
    </Container>
  );
};

const Wrap = styled.div`
  border-radius: 10px;

  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.25s ease-in-out;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border-color: #f9f9f9;
    transform: scale(1.05);
  }
`;

const Container = styled.div`
  margin-top: 20px;
  padding: 0 0 26px;
  h4 {
    margin-bottom: 30px;
  }
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export default NewDisney;
