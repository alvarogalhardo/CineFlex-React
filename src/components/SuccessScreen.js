import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

export default function SuccessScreen() {
  const { state } = useLocation();
  const { seats, titleMovie, day, time, buyersName, buyersCPF } = state;
  const navigate = useNavigate();

  function formatCPF(buyersCPF) {
    const targetElement = buyersCPF;
    const newCPF = targetElement.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4"
    );
    return newCPF;
  }

  function handleClick() {
    navigate("/");
    window.location.reload();
  }

  return (
    <Main>
      <Title>
        <h1>Pedido feito com sucesso!</h1>
      </Title>
      <InfosContainer>
        <Info>
          <h1>Filme e sessão</h1>
          {titleMovie}{" "}
          <div data-identifier="movie-session-infos-reserve-finished">
            {day} {time}
          </div>
        </Info>
        <Info>
          <h1>Ingressos</h1>
          <div data-identifier="seat-infos-reserve-finished">
            {seats.map((s, i) => (
              <p key={i}>Assento {s}</p>
            ))}
          </div>
        </Info>
        <Info>
          <h1>Comprador</h1>
          <div data-identifier="buyer-infos-reserve-finished">
            <p>Nome: {buyersName}</p>
            <p>CPF: {formatCPF(buyersCPF)}</p>
          </div>
        </Info>
      </InfosContainer>
      <button onClick={handleClick} data-identifier="back-to-home-btn">
        Voltar para Home
      </button>
    </Main>
  );
}

const Main = styled.main`
  margin-top: 67px;
  margin-bottom: 117px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Title = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #247a6b;
  margin-bottom: 20px;
  h1 {
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 0.04em;
  }
`;

const InfosContainer = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Info = styled.div`
  color: #293845;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 40px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;
