import { HttpClient } from '@containers';
import { codeStyleConverter } from '@utils/customs';
import { Movie } from '@models';
import {
    MOVIE_SERVICE_URL,
    MOVIE_SERVICE_MOVIES,
    CodeStyleType,
    HttpType
} from '@utils/constants';

const URL_TEMPLATE = `${MOVIE_SERVICE_URL}${MOVIE_SERVICE_MOVIES}`;

const addQueryString = (query, keysCount) => {
    if (query && query.value !== '') {
        const concat = keysCount = keysCount > 1 ? '&' : '';
        return `${query.key}=${query.value.toLowerCase()}${concat}`;
    }
    return '';
}

const createUrl = (url, queryString) => {
    if (!queryString) {
        return url;
    }
    let keysCount = Object.keys(queryString).length;
    let result = url;
    if (keysCount > 0) {
        result += '?';
        for (let prop in queryString) {
            result += addQueryString({
                key: prop,
                value: queryString[prop]
            }, keysCount);
            keysCount -= 1;
        }
    }
    return result;
};

const createMovie = (json) => new Movie(
    json.title,
    json.tagline,
    json.voteAverage,
    json.voteCount,
    new Date(json.releaseDate),
    json.posterPath,
    json.overview,
    json.budget,
    json.revenue,
    json.genres,
    json.runtime,
    json.id);

const getMovies = async (queryString) => {
    const uri = createUrl(URL_TEMPLATE, queryString);
    try {
        const response = await HttpClient.send(uri);
        if (!response.ok) {
            return false;
        }
        const movies = await response.json();
        const data = movies.data.map(m => createMovie(codeStyleConverter.toCamel(m)));
        return {
            data,
            offset: movies.offset,
            total: movies.totalAmount
        };
    } catch (error) {
        return null;
    }
};

const getMovie = async (id) => {
    const url = `${URL_TEMPLATE}/${id}`;
    const response = await HttpClient.send(url);
    const json = await response.json();
    return createMovie(codeStyleConverter.toCamel(json));
};

const addMovie = async (movie, converter) => {
    const url = URL_TEMPLATE;
    switch (converter) {
        case CodeStyleType.SNAKE:
            movie = codeStyleConverter.toSnake(movie);
            break;
    }
    const response = await HttpClient.send(
        url,
        HttpClient.createRequest(HttpType.POST, { body: movie })
    );
    return await response.json();
};

const editMovie = async (movie, converter) => {
    const url = URL_TEMPLATE; 
    switch (converter) {
        case CodeStyleType.SNAKE:
            movie = codeStyleConverter.toSnake(movie);
            break;
    }
    const response = await HttpClient.send(
        url,
        HttpClient.createRequest(HttpType.PUT, { body: movie })
    );
    return await response.json();
};

const deleteMovie = async (id) => {
    const url = `${URL_TEMPLATE}/${id}`;
    const response = await HttpClient.send(url, HttpClient.createRequest(HttpType.DELETE));
    if (response.ok) {
        return true;
    }
    return false;
};

const MovieService = {
    getMovies,
    getMovie,
    addMovie,
    editMovie,
    deleteMovie
}

export { MovieService };