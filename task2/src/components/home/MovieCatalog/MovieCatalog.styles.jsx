import styled from 'styled-components';

const MovieCatalog = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    align-content: center;
    justify-items: center;
    grid-gap: 1em;
`;

export { MovieCatalog };