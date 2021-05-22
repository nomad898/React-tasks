import styled from 'styled-components';
import color from '@styles/modules/_colors.module.scss';
import { RedButton } from '@components/global';

//I hope in future it will be a dropdown. But now it is placeholder for buttons
const MovieCardDropdownButton = styled.div`
    position: absolute;
    right: 0;
`;

const MovieCardDropdownOption = styled(RedButton)`
    display: none;
`;

const MovieCard = styled.div`
    //TODO: rewrite it using CSS GRID
    position: relative;
    &:hover ${MovieCardDropdownOption} {
        display: block;
    };
`;

const MovieCardImage = styled.img`
    width: 100%;
`;

const MovieCardInfo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const MovieCardTitle = styled.span`
    color: ${color.fontDark};
`;

const MovieCardReleaseDate = styled.div`
    border: 2px solid ${color.secondaryDark};
    border-radius: 0.2rem;
    padding: 0.2rem 0.6rem;
    font-size: 0.8rem;
    color: ${color.secondaryDark};
`;

const MovieCardGenres = styled.span`
    width: 100%;
    font-size: 0.8rem;
    color: ${color.secondaryDark};
`;

export {
    MovieCard,
    MovieCardImage,
    MovieCardInfo,
    MovieCardTitle,
    MovieCardReleaseDate,
    MovieCardGenres,
    MovieCardDropdownButton,
    MovieCardDropdownOption
};