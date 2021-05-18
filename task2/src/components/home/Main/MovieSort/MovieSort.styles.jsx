import styled from 'styled-components';
import color from '@styles/modules/_colors.module.scss';

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
    color: ${color.white};
    border: none;
`;

export {
    MovieSort,
    MovieSortText,
    MovieSortDropdown
};