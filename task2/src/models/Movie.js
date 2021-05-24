import PropTypes from 'prop-types'
import { FilterType, VOTE_AVERAGE_MIN, VOTE_AVERAGE_MAX } from '@utils/constants'
import { range } from '@utils/customs';
import * as Yup from 'yup';

class Movie {
    constructor(
        title,
        tagline,
        voteAverage,
        voteCount,
        releaseDate,
        posterPath,
        overview,
        budget,
        revenue,
        genres,
        runtime,
        id) {
        this.title = title;
        this.tagline = tagline;
        this.voteAverage = voteAverage;
        this.voteCount = voteCount;
        this.releaseDate = releaseDate;
        this.posterPath = posterPath;
        this.overview = overview;
        this.budget = budget;
        this.revenue = revenue;
        this.genres = genres;
        this.runtime = runtime;
        if (id) {
            this.id = id;
        } // JS cannot overload constructors :(
    }
}

Movie.PropTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string,
    voteAverage: range(VOTE_AVERAGE_MIN, VOTE_AVERAGE_MAX),
    voteCount: PropTypes.number,
    releaseDate: PropTypes.instanceOf(Date),
    posterPath: PropTypes.string.isRequired,
    overview: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number
}

const MovieSchema = Yup.object({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    releaseDate: Yup.date()
        .default(() => new Date())
        .required('Required'),
    movieUrl: Yup.string()
        .url()
        .required('Required'),
    genre: Yup.string()
        .oneOf(Object.entries(FilterType).map(([k, v]) => (k)).filter(m => m !== FilterType.ALL))
        .required('Required'),
    overview: Yup.string()
        .required('Required'),
    runtime: Yup.number()        
        .positive()
        .integer()
        .required('Required')
});

export { Movie, MovieSchema }