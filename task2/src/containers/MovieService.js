import { HttpClient } from '@containers';
import { codeStyleConverter } from '@utils/customs';
import {
    MOVIE_SERVICE_URL,
    MOVIE_SERVICE_MOVIES,
    CodeStyleType,
    HttpType
} from '@utils/constants';

const URL_TEMPLATE = `${MOVIE_SERVICE_URL}${MOVIE_SERVICE_MOVIES}`;

const addQueryString = (query, countOfKeys) => {
    if (query) {
        const concat = countOfKeys = countOfKeys > 1 ? '&' : '';
        return `${query.key}=${query.value}${concat}`;
    }
    return '';
}

const createUrl = (url, queryString) => {
    if (!queryString) {
        return url;
    }
    let countOfKeys = Object.keys(queryString).length;
    let result = url;
    if (countOfKeys > 0) {
        result += '?';
        for (let prop in queryString) {
            result += addQueryString({
                key: prop,
                value: queryString[prop]
            }, countOfKeys);
            countOfKeys -= 1;
        }
    }
    return result;
};

const getMovies = async (queryString) => {
    const uri = createUrl(URL_TEMPLATE, queryString);
    try {
        const response = await HttpClient.send(uri);
        if (!response.ok) {
            return false;
        }
        return await response.json();
    } catch (error) {
        return null;
    }
};

const getMovie = async (id) => {
    const url = `${URL_TEMPLATE}/${id}`;
    const response = await HttpClient.send(url);
    return await response.json();
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

    const body = JSON.stringify(movie);
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