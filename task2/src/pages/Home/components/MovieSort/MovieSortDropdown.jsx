import styled from 'styled-components';

const MovieSortDropdownWrapperStyled = styled.div`
    padding: 10px 15px;
`;

const MovieSortTextStyled = styled.span`
    margin-right: 5px;
`;

const MovieSortDropdownStyled = styled.select`
    padding: 5px 10px;
    background-color: transparent;
    color: #ffffff;
    border: none;
`;

const MovieSortDropdown = () => (
    <MovieSortDropdownWrapperStyled>
        <MovieSortTextStyled>
            SORT BY 
        </MovieSortTextStyled>
        <MovieSortDropdownStyled>
            <option value="0">RELEASE DATE</option>
            <option value="1">TITLE</option>
        </MovieSortDropdownStyled>
    </MovieSortDropdownWrapperStyled>
);

export { MovieSortDropdown };