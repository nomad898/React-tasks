import styled from 'styled-components';
import { Colors} from '@utils';

//TODO: change following CSS
const MovieSort = styled.div`
    padding: 10px 15px;
`;

const MovieSortText = styled.span`
    margin-right: 5px;
`;

const MovieSortDropdown = styled.select`
    padding: 5px 10px;
    background-color: transparent;
    color: ${Colors.WHITE};
    border: none;
`;

export {
    MovieSort,
    MovieSortText,
    MovieSortDropdown
};