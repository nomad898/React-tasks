import styled from 'styled-components';

const AppTitleStyled = styled.span`
    position: relative;
    color: #f65261;
`;

const NetflixStyled = styled.span`
    font-weight: bold;
`;

const AppTitle = () => (
    <AppTitleStyled>
        <NetflixStyled>netflix</NetflixStyled>roulette
    </AppTitleStyled>
);

export { AppTitle };