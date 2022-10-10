import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Movie({ movie }) {
  const { id, title, posterURL } = movie;
  return (
    <Link to={`/sessoes/${id}`}>
      <Poster src={posterURL} alt={title} data-identifier="movie-outdoor" />
    </Link>
  );
}

const Poster = styled.img`
  height: 209px;
  width: 145px;
  background-color: white;
  padding: 8px;
  margin-right: 15px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;
