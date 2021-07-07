import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import db from "../firebase";
const Detail = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetail(doc.data());
        } else {
          console.log("no such document");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [id]);

  console.log("details", detail);
  return (
    <Container>
      <Background>
        <img src={detail?.backgroundImg} alt="" />
      </Background>
      <ImageTitle>
        <img src={detail?.titleImg} alt="" />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>

          <AddList>
            <span>+</span>
          </AddList>
          <GroupIcon>
            <img src="/images/group-icon.png" alt="" />
          </GroupIcon>
        </Controls>
        <SubTitles>{detail?.subTitle}</SubTitles>
        <Description>{detail?.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const SubTitles = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0;
  max-width: 80%;
  margin-top: 20px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 100%;
  }
`;
const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    /* background-color: rgb(249, 249, 249); */
    font-size: 35px;
  }
`;
const GroupIcon = styled(AddList)`
  img {
    object-fit: contain;
    width: 40px;
    height: 40px;
  }
`;

const Player = styled.button`
  display: flex;
  justify-content: center;
  font-size: 15px;
  padding: 0 24px;
  margin: 0px 20px 0px 9px;
  align-items: center;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  outline: none;
  background: rgba(249, 249, 249);
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgba(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 22px;
    margin-left: 17px;
    img {
      width: 25px;
    }
  }
`;
const Trailer = styled(Player)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgba(249, 249, 249);
  color: rgba(249, 249, 249);
`;
const ContentMeta = styled.div`
  max-width: 874px;
  overflow: hidden;
`;
const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;
const ImageTitle = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  width: 90vw;
  height: 50vh;
  min-height: 170px;
  margin-left: 20px;
  padding: 15px;
  img {
    height: 100%;
    width: 43%;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;
const Background = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  opacity: 0.8;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  top: 72px;
  padding: 0 calc(3.5vw);
`;

export default Detail;
