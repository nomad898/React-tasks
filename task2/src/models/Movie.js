import PropTypes from 'prop-types'
import { VOTE_AVERAGE_MIN, VOTE_AVERAGE_MAX } from '@utils/constants'
import { range } from '@utils/customs'

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

export { Movie }