import styled from "styled-components";
import { MovieCard } from './MovieCard'
import { Movie } from '@models/Movie';
import avengersPoster from '@public/assets/images/avengers.jpg'
import bohemianRhapsodyPoster from '@public/assets/images/bohemian-rhapsody.jpg'
import inceptionPoster from '@public/assets/images/inception.jpg'
import killBillPoster from '@public/assets/images/kill-bill.jpg'
import pulpFictionPoster from '@public/assets/images/pulp-fiction.jpg'

const MovieCatalogStyled = styled.div`
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    align-content: center;
    justify-items: center;
    padding: 20px 50px;
`;

const FoundMoviesWrapperStyled = styled.div`
    padding: 20px 70px;
`;

const FoundMoviesStyled = styled.span`
    font-weight: bold;
`;

const movies = [
    new Movie('Avengers', 2012, 'genre', avengersPoster),
    new Movie('Bohemian Rhapsody', 2018, 'genre', bohemianRhapsodyPoster),
    new Movie('Inception', 2010, 'genre', inceptionPoster),
    new Movie('Kill Bill', 2005, 'genre', killBillPoster),
    new Movie('Pulp Fiction', 1995, 'genre', pulpFictionPoster)
];

const MovieCatalog = (props, state) => (
    <>
        <FoundMoviesWrapperStyled>
            <FoundMoviesStyled>
                39
            </FoundMoviesStyled>
            <span> movies found</span>
        </FoundMoviesWrapperStyled>
        <MovieCatalogStyled>
            {
                movies.map((movie, idx) => <MovieCard key={idx} movie={movie} />)
            }
        </MovieCatalogStyled>
    </>
);

export { MovieCatalog };