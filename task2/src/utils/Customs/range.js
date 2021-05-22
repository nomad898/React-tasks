const range = (min, max) => {
    return (props, propName, componentName) => {
        const prop = props[propName];
        if (typeof prop !== 'number' || prop < min || prop > max) {
            return new Error(`${componentName}: prop ${propName} must be a number in the range ${min} and ${max}`)
        }
    }
};

export { range };