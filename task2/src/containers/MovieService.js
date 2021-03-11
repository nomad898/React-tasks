import { Movie } from '@models';
import avengersPoster from '@public/assets/images/avengers.jpg'
import bohemianRhapsodyPoster from '@public/assets/images/bohemian-rhapsody.jpg'
import inceptionPoster from '@public/assets/images/inception.jpg'
import killBillPoster from '@public/assets/images/kill-bill.jpg'
import pulpFictionPoster from '@public/assets/images/pulp-fiction.jpg'

const movies = [
    new Movie('Marvel\'s Avengers', new Date(2012, 11, 10), 'genre', avengersPoster),
    new Movie('Bohemian Rhapsody', new Date(2018, 1, 28), 'genre', bohemianRhapsodyPoster),
    new Movie('Inception', new Date(2010, 8, 6), 'genre', inceptionPoster),
    new Movie('Kill Bill', new Date(2005, 3, 21), 'genre', killBillPoster),
    new Movie('Pulp Fiction', new Date(1998, 9, 14), 'genre', pulpFictionPoster)
];

const genres = [
    'ALL',
    'DOCUMENTARY',
    'COMEDY',
    'HORROR',
    'CRIME'
]

const MovieService = {
    getMovies: () => ( movies ),
    getGenres: () => ( genres )
}

export { MovieService };