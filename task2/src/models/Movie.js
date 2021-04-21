class Movie {
    constructor(
        title,
        releaseDate,
        genres,
        poster,
        rating,
        duration,
        description) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.genres = genres;
        this.poster = poster;
        this.rating = rating;
        this.duration = duration;
        this.description = description;
    }
}

export { Movie }