import styled from 'styled-components';
import { Colors } from '@utils';

const MovieCatalogFilter = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 20px 70px;
    border-bottom: 5px solid ${Colors.SECONDARY_DARK};
`;

export { MovieCatalogFilter };