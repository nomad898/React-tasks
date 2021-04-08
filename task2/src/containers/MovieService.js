import { Movie } from '@models';
import avengersPoster from '@public/assets/images/avengers.jpg'
import bohemianRhapsodyPoster from '@public/assets/images/bohemian-rhapsody.jpg'
import inceptionPoster from '@public/assets/images/inception.jpg'
import killBillPoster from '@public/assets/images/kill-bill.jpg'
import pulpFictionPoster from '@public/assets/images/pulp-fiction.jpg'

const movies = [
    new Movie('Marvel\'s Avengers', new Date(2012, 11, 10), 'COMEDY, CRIME', avengersPoster),
    new Movie('Bohemian Rhapsody', new Date(2018, 1, 28), 'DOCUMENTARY', bohemianRhapsodyPoster),
    new Movie('Inception', new Date(2010, 8, 6), 'CRIME', inceptionPoster),
    new Movie('Kill Bill', new Date(2005, 3, 21), 'HORROR, CRIME', killBillPoster),
    new Movie('Pulp Fiction', new Date(1998, 9, 14), 'COMEDY, CRIME', pulpFictionPoster)
];

const genres = [
    'ALL',
    'DOCUMENTARY',
    'COMEDY',
    'HORROR',
    'CRIME'
]

const getMovies = () => (
    Promise.resolve(movies)
);
const getGenres = () => (
    Promise.resolve(genres)
);
const addMovie = (movie) => (
    Promise.resolve(movies.push(movie))
);
const editMovie = (movie) => (
    Promise.resolve((movie) => {
        movies[movie.id] = movie
    })
);
const deleteMovie = (movie) => (
    Promise.resolve(movies.filter(m => m !== movie))
);

const MovieService = {
    getMovies,
    getGenres,
    addMovie,
    editMovie,
    deleteMovie
}

export { MovieService };