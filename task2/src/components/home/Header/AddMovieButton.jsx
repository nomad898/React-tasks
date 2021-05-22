import { BoldText } from '@components/global';
import { AddMovieButton as Wrapper } from './HeaderButton.styles';

const AddMovieButton = (
    {
        onClick
    }) => (
    <Wrapper onClick={onClick}>
        <BoldText>
            + ADD MOVIE
        </BoldText>
    </Wrapper>
);

export { AddMovieButton };