import styled from 'styled-components';
import color from '@styles/modules/_colors.module.scss';
import { Text, RedText } from '@components/global';

const MovieDetails = styled.div`
    display: flex;
    padding: 1em 1.5em;
`;

const MovieDetailsImageCol = styled.div`
    width: 100%;
`;

const MovieDetailsInfoCol = styled.div`
    margin: 0.6em 1.6em;
`;

const MovieDetailsImage = styled.img`
    width: 100%;
`;


const MovieDetailsInfoRow = styled.div`
    margin: 1em 0.6em;
`;

const MovieDetailsTitleRow = styled(MovieDetailsInfoRow)`
    display: flex;
    align-items: center;
`;

const MovieDetailsTitle = styled(Text)`
    font-size: 3em;
`;

const MovieDetailsRating = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid ${color.white};
    color: ${color.green};
    height: 2em;
    width: 2em;
    margin: 0 1em;
`;

const MovieDetailsDurationText = styled(RedText)`
    margin: 0 2em;
`;

const MovieDetailsDescription = styled.p`
    color: ${color.white}
`;

export {
    MovieDetails,
    MovieDetailsImageCol,
    MovieDetailsInfoCol,
    MovieDetailsInfoRow,
    MovieDetailsTitleRow,
    MovieDetailsImage,
    MovieDetailsTitle,
    MovieDetailsRating,
    MovieDetailsDurationText,
    MovieDetailsDescription,
};