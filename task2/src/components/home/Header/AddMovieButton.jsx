import { AddMovieButton as Wrapper } from './HeaderButton.styles';
import { BoldText } from '@components/global';

const AddMovieButton = (props) => (
    <Wrapper onClick={props.onAddMovieClick}>
        <BoldText>
            + ADD MOVIE
        </BoldText>
    </Wrapper>
);

export { AddMovieButton };