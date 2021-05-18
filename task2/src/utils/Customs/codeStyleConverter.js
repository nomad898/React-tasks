import snakecaseKeys from 'snakecase-keys';

const toSnake = (obj) => {
    return snakecaseKeys(obj);
}

const codeStyleConverter = {
    toSnake
};

export { codeStyleConverter };