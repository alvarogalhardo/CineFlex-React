import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Seat from "./Seat"

export default function Seats() {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  console.log(seats);
  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );
    promisse.then((res) => {
      setSeats(res.data.seats);
      setImage(res.data.movie.posterURL);
      setTitle(res.data.movie.title);
      setDay(res.data.day.weekday);
      setTime(res.data.name);
    });
    promisse.catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Main>
        <Title>
          <h1>Selecione o(s) assento(s)</h1>
        </Title>
        {seats.map((s)=>{
          <Seat key={s.id} name={s.name} isAvailable={s.isAvailable} />
        })}
      </Main>
      <Footer>
        <img src={image} alt={title} />
        <Info>
          <h1>{title}</h1>
          <h1>
            {" "}
            {day} - {time}
          </h1>
        </Info>
      </Footer>
    </>
  );
}

const Main = styled.main`
  margin-top: 67px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #293845;
  h1 {
    font-size: 24px;
    font-weight: 400;
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 117px;
  background-color: #dfe6ed;
  color: #293845;
  border: 1px solid #9eadba;
  display: flex;
  align-items: center;
  padding-left: 10px;
  img {
    width: 64px;
    height: 89px;
    padding: 8px;
    background-color: white;
    margin-right: 15px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
