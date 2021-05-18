import styled from 'styled-components';
import color from '@styles/modules/_colors.module.scss';

const MovieCatalogFilter = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 20px 70px;
    border-bottom: 5px solid ${color.secondaryDark};
`;

export { MovieCatalogFilter };