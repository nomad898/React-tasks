import styled from 'styled-components';
import PropTypes from 'prop-types';

const MovieGenreStyled = styled.div`
  padding: 10px 15px;
  font-size: 16px;

  &:first-child {
      padding-left: 0px;
      border-bottom: 5px solid #f65261;
      margin-bottom: -10px;
  }
`;

const MovieGenre = (props) => (
    <MovieGenreStyled>
        {props.genre}
    </MovieGenreStyled>
);

const genres = [
    'ALL',
    'DOCUMENTARY',
    'COMEDY',
    'HORROR',
    'CRIME'
]

const MovieGenreListStyled = styled.div`
    display: flex;
`;

const MovieGenreList = (props) => (
    <MovieGenreListStyled>
        {
            genres.map((genre, idx) => <MovieGenre key={idx} genre={genre}/>)
        }
    </MovieGenreListStyled>
);

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired,
};


export { MovieGenreList };