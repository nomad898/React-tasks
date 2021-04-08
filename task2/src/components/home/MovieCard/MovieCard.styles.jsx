import styled from 'styled-components';
import { RedButton } from '@components/global';
import { Colors } from '@utils'; 

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
    height: 20%;
`;

const MovieCardInfo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const MovieCardTitle = styled.span`
    color: ${Colors.FONT_DARK};
`;

const MovieCardReleaseDate = styled.div`
    border: 2px solid ${Colors.SECONDARY_DARK};
    border-radius: 0.2rem;
    padding: 0.2rem 0.6rem;
    font-size: 0.8rem;
    color: ${Colors.SECONDARY_DARK};
`;

const MovieCardGenres = styled.span`
    width: 100%;
    font-size: 0.8rem;
    color: ${Colors.SECONDARY_DARK};
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