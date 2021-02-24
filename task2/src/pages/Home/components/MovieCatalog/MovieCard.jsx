import styled from "styled-components";
import PropTypes from 'prop-types';
import { Movie } from '@models/Movie';

const MovieCardStyled = styled.div`
    padding: 20px 20px;
    height: 400px;
    width: 250px;
`;

const MovieCardImgStyled = styled.img`
    width: 100%;
    height: 370px;
`;
const MovieCardInfoStyled = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: baseline;
	align-content: stretch;
`;
const MovieCardTitleStyled = styled.span`   
    font-size: 16px;
`;
const MovieCardReleaseDateStyled = styled.div`
    border: 2px solid #555555;
    border-radius: 6px;
    padding: 2px 6px;
    font-size: 12px;
`;
const MovieCardGenresStyled = styled.span`
    width: 100%;
    font-size: 12px;
`;

const MovieCard = (props, state) => (
    <MovieCardStyled>
        <MovieCardImgStyled src={props.movie.poster}/>
        <MovieCardInfoStyled>
            <MovieCardTitleStyled>
                {props.movie.title}
            </MovieCardTitleStyled>
            <MovieCardReleaseDateStyled>
                {props.movie.releaseDate}
            </MovieCardReleaseDateStyled>
            <MovieCardGenresStyled>
                {props.movie.genres}
            </MovieCardGenresStyled>
        </MovieCardInfoStyled>
    </MovieCardStyled>
);

MovieCard.propTypes = {
    movie: PropTypes.instanceOf(Movie)
};

export { MovieCard };