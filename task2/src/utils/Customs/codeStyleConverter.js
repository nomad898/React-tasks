import snakecaseKeys from 'snakecase-keys';
import camelcaseKeys from 'camelcase-keys';

const toSnake = (obj) => {
    return snakecaseKeys(obj);
}

const toCamel = (obj) => {
    return camelcaseKeys(obj);
}

const codeStyleConverter = {
    toSnake,
    toCamel
};

export { codeStyleConverter };