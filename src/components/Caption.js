import styled from "styled-components";

export default function Caption({
  background,
  border,
  caption,
  dataIdentifier,
}) {
  return (
    <Container data-identifier={dataIdentifier}>
      <Content background={background} border={border} />
      {caption}
    </Container>
  );
}

const Content = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  border: 1px solid ${(props) => props.border};
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
