import { render, cleanup } from '@testing-library/react';
import { MovieDetails } from './MovieDetails';
import { Movie } from '@models';

afterEach(cleanup);

const movie = new Movie(
    "Jumanji: Welcome to the Jungle",
    "The game has evolved.",
    6.5,
    3330,
    new Date("2017-12-09"),
    "https://image.tmdb.org/t/p/w500/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg",
    "The tables are turned as four teenagers are sucked into Jumanji's",
    90000000,
    928901353,
    [
        "Action",
        "Adventure",
        "Comedy",
        "Family"
    ],
    119,
    353486
);

it('should take a snapshot', () => {
    const { asFragment } = render(<MovieDetails movie={movie}/>);

    expect(asFragment(<MovieDetails movie={movie}/>)).toMatchSnapshot();
})