import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Movie from "./Movie";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const promisse = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );
    promisse.then((res) => setMovies(res.data));
    promisse.catch((err) => console.log(err));
  }, []);
  return (
    <Main>
      <Title>
        <h1>Selecione o filme</h1>
      </Title>
      <Content>
        {movies.map((movie, i) => (
          <Movie key={i} movie={movie} />
        ))}
      </Content>
    </Main>
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

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
  overflow-y: scroll;
`;
