import { Movie } from '@models';
import avengersPoster from '@public/assets/images/avengers.jpg'
import bohemianRhapsodyPoster from '@public/assets/images/bohemian-rhapsody.jpg'
import inceptionPoster from '@public/assets/images/inception.jpg'
import killBillPoster from '@public/assets/images/kill-bill.jpg'
import pulpFictionPoster from '@public/assets/images/pulp-fiction.jpg'

const movies = [
    new Movie('Marvel\'s Avengers', new Date(2012, 11, 10), 'comedy, crime', avengersPoster),
    new Movie('Bohemian Rhapsody', new Date(2018, 1, 28), 'documentary', bohemianRhapsodyPoster),
    new Movie('Inception', new Date(2010, 8, 6), 'crime', inceptionPoster),
    new Movie('Kill Bill', new Date(2005, 3, 21), 'horror, crime', killBillPoster),
    new Movie('Pulp Fiction', new Date(1998, 9, 14), 'comedy, horror', pulpFictionPoster)
];

const genres = [
    'ALL',
    'DOCUMENTARY',
    'COMEDY',
    'HORROR',
    'CRIME'
]

const getMovies = () => (movies);
const getGenres = () => (genres);
const addMovie = (movie) => (
    movies.push(movie)
);
const editMovie = (movie) => (
    movies[movie.id] = movie
);
const deleteMovie = (movie) => (
    movies.filter(m => m !== movie)
);

const MovieService = {
    getMovies,
    getGenres,
    addMovie,
    editMovie,
    deleteMovie
}

export { MovieService };