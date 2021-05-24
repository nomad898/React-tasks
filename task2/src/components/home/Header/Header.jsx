import {
    memo,
    useEffect
} from 'react';
import { useParams } from 'react-router-dom';
import {
    useSelector,
    useDispatch
} from "react-redux";
import {
    moviesAction,
    modalsAction
} from '@stores/actions';
import {
    moviesSelector,
    modalsSelector
} from '@stores/selectors';
import {
    Header as Wrapper,
    AppTitle
} from '@components/global';
import {
    MovieSearch,
    MovieDetails,
    AddMovieModal
} from '@components/home';
import { HeaderTop } from './HeaderTop.styles';
import { HeaderText } from './HeaderText.styles';
import { AddMovieButton } from './AddMovieButton';
import { SearchIconButton } from './SearchIconButton';

const Header = memo(() => {

    const dispatch = useDispatch();

    const movie = useSelector(moviesSelector.selectMovie);
    const showAddMovie = useSelector(modalsSelector.selectAddMovie);

    const handleSearchIconClick = () => {
        dispatch(moviesAction.getMovie(null));
    };

    const handleAddMovieClick = () => {
        dispatch(modalsAction.showAddMovie(true));
    };

    return (
        <Wrapper>
            {
                movie ?
                    <>
                        <HeaderTop>
                            <AppTitle />
                            <SearchIconButton onClick={handleSearchIconClick} />
                        </HeaderTop>
                        <MovieDetails movie={movie} />
                    </> :
                    <>
                        <HeaderTop>
                            <AppTitle />
                            <AddMovieButton onClick={handleAddMovieClick} />
                        </HeaderTop>
                        <HeaderText>
                            FIND YOUR MOVIE
                        </HeaderText>
                        <MovieSearch />
                    </>
            }
            {
                showAddMovie && <AddMovieModal />
            }
        </Wrapper>
    )
});

export { Header };