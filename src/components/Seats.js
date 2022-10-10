import styled from "styled-components";
import { useParams, useNavigate,useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Seat from "./Seat";
import Caption from "./Caption";

export default function Seats() {
  const { idSessao } = useParams();
  const navigate = useNavigate();
  const {state} = useLocation();
  const [seats, setSeats] = useState([]);
  const [imagePoster, setImage] = useState("");
  const [titleMovie, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedSeatsId, setSelectedSeatsId] = useState([])
  const [buyersName, setBuyersName] = useState("");
  const [buyersCPF, setBuyersCPF] = useState("");

  const CAPTIONS = [
    {
      background: "#1AAE9E",
      border: "#0E7D71",
      caption: "Selecionado",
      dataIdentifier: "seat-selected-subtitle",
    },
    {
      background: "#C3CFD9",
      border: "#7B8B99",
      caption: "Disponível",
      dataIdentifier: "seat-available-subtitle",
    },
    {
      background: "#FBE192",
      border: "#F7C52B",
      caption: "Indisponível",
      dataIdentifier: "seat-unavailable-subtitle",
    },
  ];

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );
    promisse.then((res) => {
      const { movie, day, name, seats } = res.data;
      setImage(movie.posterURL);
      setTitle(movie.title);
      setDay(day.weekday);
      setTime(name);
      setSeats(seats);
    });
    promisse.catch((err) => console.log(err));
  }, []);

  function reservateSeats(e) {
    e.preventDefault();
    if (buyersName.length === 0) {
      alert("Insira seu nome");
      return;
    }
    if (buyersCPF.length !== 11) {
      alert("Insira um CPF válido");
      return;
    }
    const postURL =
      "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many/";
    const postObject = {
      ids: selectedSeatsId,
      name: buyersName,
      cpf: buyersCPF,
    };
    console.log(postObject)
    const promisse = axios.post(postURL, postObject);
    promisse.then((res) => {
      console.log(res)
      if (res.status === 200) {
        navigate("/sucesso", {
          state: {
            seats: selectedSeats,
            titleMovie: titleMovie,
            day: state,
            time: time,
            buyersName: buyersName,
            buyersCPF: buyersCPF,
          },
        });
      }
    });
    promisse.catch((err) =>
      alert("Algo errado aconteceu, tente novamente mais tarde")
    );
  }

  return (
    <>
      <Main>
        <Title>
          <h1>Selecione o(s) assento(s)</h1>
        </Title>
        <SeatsContainer>
          {seats.map((s) => (
            <Seat
              key={s.id}
              seat={s}
              setSelectedSeats={setSelectedSeats}
              selectedSeatsArray={selectedSeats}
              selectedSeatsId={selectedSeatsId}
              setSelectedSeatsId={setSelectedSeatsId}
            />
          ))}
        </SeatsContainer>
        <CaptionContainer>
          {CAPTIONS.map((C, i) => (
            <Caption
              key={i}
              background={C.background}
              border={C.border}
              caption={C.caption}
              dataIdentifier={C.dataIdentifier}
            />
          ))}
        </CaptionContainer>
        <FromContainer onSubmit={(e) => reservateSeats(e)}>
          <div>
            <label>Nome do comprador:</label>
            <input
              type="text"
              name="Name"
              placeholder="Digite seu nome..."
              data-identifier="buyer-name-input"
              onChange={(e) => setBuyersName(e.target.value)}
            />
          </div>
          <div>
            <label>CPF do comprador:</label>
            <input
              type="number"
              name="CPF"
              placeholder="Digite seu CPF.."
              data-identifier="buyer-cpf-input"
              pattern="[0-9]{11}"
              onChange={(e) => setBuyersCPF(e.target.value)}
            />
          </div>
          <button type="submit" data-identifier="reservation-btn">
            Reservar assento(s)
          </button>
        </FromContainer>
      </Main>
      <Footer>
        <img src={imagePoster} alt="movie poster" />
        <Info data-identifier="movie-and-session-infos-preview">
          <h1>{titleMovie}</h1>
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
  margin-bottom: 117px;
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

const SeatsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 8px;
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

const CaptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
  color: #4e5a65;
  width: 100%;
  height: 100px;
`;

const FromContainer = styled.form`
  width: 100%;
  height: 350px;
  margin: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    color: #293845;
    height: 75px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 3px;
    margin-bottom: 10px;

    input {
      margin-top: 4px;
      height: 45px;
      width: 100%;
      border: 1px solid #d5d5d5;
      border-radius: 3px;
    }
  }
  button {
    background-color: #e8833a;
    width: 225px;
    height: 42px;
    border-radius: 3px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
