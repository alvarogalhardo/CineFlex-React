import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Day({ day }) {
  return (
    <Content>
      <h1>
        {day.weekday} - {day.date}
      </h1>
      <Container>
        {day.showtimes.map((time) => (
          <Link to={`/assentos/${time.id}`} key={time.id}>
            <Time key={time.id}>{time.name}</Time>
          </Link>
        ))}
      </Container>
    </Content>
  );
}

const Content = styled.div`
  margin-left: 22px;
  margin-bottom: 22px;
  height: 100px;
  width: 250px;
  h1 {
    font-size: 20px;
    font-weight: 400;
    color: #293845;
  }
`;
const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
`;
const Time = styled.div`
  width: 83px;
  height: 43px;
  background-color: #e8833a;
  border-radius: 3px;
  color: white;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
