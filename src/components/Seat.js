import styled from "styled-components";
import { useState, useEffect } from "react";

export default function Seat({
  seat,
  setSelectedSeats,
  selectedSeatsArray,
  selectedSeatsId,
  setSelectedSeatsId,
}) {
  const { id, name, isAvailable } = seat;
  const [backgroundColor, setBackgroundColor] = useState("#C3CFD9");
  const [border, setBorder] = useState("#808F9D");
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (!isAvailable) {
      setBackgroundColor("#FBE192");
      setBorder("#F7C52B");
    }
  }, []);

  function handleClick() {
    if (isAvailable) {
      setSelected(!selected);
      if (!selected) {
        setSelectedSeatsId([...selectedSeatsId, id]);
        setSelectedSeats([...selectedSeatsArray, Number(name)]);
      } else {
        setSelectedSeatsId(selectedSeatsId.filter((element) => element !== id));
        setSelectedSeats(
          selectedSeatsArray.filter((element) => element !== Number(name))
        );
      }
    } else {
      alert("Esse assento não está disponível");
    }
  }

  return (
    <Container
      onClick={handleClick}
      backgroundColor={backgroundColor}
      selected={selected}
      border={border}
      data-identifier="seat"
    >
      {name}
    </Container>
  );
}

const Container = styled.div`
  width: 26px;
  height: 26px;
  background: ${(props) =>
    props.selected ? "#1AAE9E" : props.backgroundColor};
  border: 1px solid ${(props) => (props.selected ? "#0E7D71" : props.border)};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 18px;
  margin-right: 8px;
  cursor: pointer;
`;
