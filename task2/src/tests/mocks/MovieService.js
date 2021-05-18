import { Movie } from '@models';
import avengersPoster from '@public/assets/images/avengers.jpg'
import bohemianRhapsodyPoster from '@public/assets/images/bohemian-rhapsody.jpg'
import inceptionPoster from '@public/assets/images/inception.jpg'
import killBillPoster from '@public/assets/images/kill-bill.jpg'
import pulpFictionPoster from '@public/assets/images/pulp-fiction.jpg'

const movies = [
    new Movie('Marvel\'s Avengers', new Date(2012, 11, 10), 'COMEDY, CRIME', avengersPoster, 10, 111, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed libero lobortis mi ornare tempus. Vestibulum a efficitur eros. Sed sed ex mattis, tristique lacus ac, efficitur nisl. Maecenas pellentesque feugiat pulvinar. Nullam auctor in justo id sodales. Maecenas viverra eleifend orci quis mollis. Fusce sodales et arcu sed viverra. Pellentesque eget velit suscipit, imperdiet nisi a, cursus felis. Donec at lorem malesuada, sollicitudin orci id, rutrum neque. Morbi nec interdum ante, vel dignissim felis. Donec accumsan imperdiet rutrum.'),
    new Movie('Bohemian Rhapsody', new Date(2018, 1, 28), 'DOCUMENTARY', bohemianRhapsodyPoster, 9.8, 130, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed libero lobortis mi ornare tempus. Vestibulum a efficitur eros. Sed sed ex mattis, tristique lacus ac, efficitur nisl. Maecenas pellentesque feugiat pulvinar. Nullam auctor in justo id sodales. Maecenas viverra eleifend orci quis mollis. Fusce sodales et arcu sed viverra. Pellentesque eget velit suscipit, imperdiet nisi a, cursus felis. Donec at lorem malesuada, sollicitudin orci id, rutrum neque. Morbi nec interdum ante, vel dignissim felis. Donec accumsan imperdiet rutrum.'),
    new Movie('Inception', new Date(2010, 8, 6), 'CRIME', inceptionPoster, 7.7, 90, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed libero lobortis mi ornare tempus. Vestibulum a efficitur eros. Sed sed ex mattis, tristique lacus ac, efficitur nisl. Maecenas pellentesque feugiat pulvinar. Nullam auctor in justo id sodales. Maecenas viverra eleifend orci quis mollis. Fusce sodales et arcu sed viverra. Pellentesque eget velit suscipit, imperdiet nisi a, cursus felis. Donec at lorem malesuada, sollicitudin orci id, rutrum neque. Morbi nec interdum ante, vel dignissim felis. Donec accumsan imperdiet rutrum.'),
    new Movie('Kill Bill', new Date(2005, 3, 21), 'HORROR, CRIME', killBillPoster, 4.6, 100, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed libero lobortis mi ornare tempus. Vestibulum a efficitur eros. Sed sed ex mattis, tristique lacus ac, efficitur nisl. Maecenas pellentesque feugiat pulvinar. Nullam auctor in justo id sodales. Maecenas viverra eleifend orci quis mollis. Fusce sodales et arcu sed viverra. Pellentesque eget velit suscipit, imperdiet nisi a, cursus felis. Donec at lorem malesuada, sollicitudin orci id, rutrum neque. Morbi nec interdum ante, vel dignissim felis. Donec accumsan imperdiet rutrum.'),
    new Movie('Pulp Fiction', new Date(1998, 9, 14), 'COMEDY, CRIME', pulpFictionPoster, 3.9, 120, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed libero lobortis mi ornare tempus. Vestibulum a efficitur eros. Sed sed ex mattis, tristique lacus ac, efficitur nisl. Maecenas pellentesque feugiat pulvinar. Nullam auctor in justo id sodales. Maecenas viverra eleifend orci quis mollis. Fusce sodales et arcu sed viverra. Pellentesque eget velit suscipit, imperdiet nisi a, cursus felis. Donec at lorem malesuada, sollicitudin orci id, rutrum neque. Morbi nec interdum ante, vel dignissim felis. Donec accumsan imperdiet rutrum.')
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