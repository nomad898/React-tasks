import { useRef } from 'react';

const useCountRenders = (name) => {
    const renders = useRef(0);
    console.log(`render ${name}: ${renders.current++}`);
};

export { useCountRenders };