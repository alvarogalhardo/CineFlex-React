import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Day from "./Day";

export default function Session() {
  const { idFilme } = useParams();
  const [days, setDays] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
    );
    promisse.then((res) => {
      console.log(res.data);
      setDays(res.data.days);
      setImage(res.data.posterURL);
      setTitle(res.data.title);
    });
    promisse.catch((err) => console.log(err.response.data));
  }, []);

  return (
    <>
      <Main>
        <Title>
          <h1>Selecione o horário</h1>
        </Title>
        {days.map((day, i) => (
          <Day key={i} day={day} />
        ))}
      </Main>
      <Footer>
        <img src={image} alt={title} data-identifier="movie-img-preview" />
        <h1 data-identifier="movie-and-session-infos-preview">{title}</h1>
      </Footer>
    </>
  );
}

const Main = styled.main`
  margin-top: 67px;
  margin-bottom: 117px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
