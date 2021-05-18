import { memo } from 'react';
import {
    Header as Wrapper,
    AppTitle
} from '@components/global';
import {
    MovieSearch,
    MovieDetails
} from '@components/home';
import { HeaderTop } from './HeaderTop.styles';
import { HeaderText } from './HeaderText.styles';
import { HeaderSearch } from './HeaderSearch.styles'
import { AddMovieButton } from './AddMovieButton';
import { SearchIconButton } from './SearchIconButton';

const Header = memo((
    {
        activeMovie,
        onSearchIconClick,
        onAddMovieClick
    }) => (
    <Wrapper>
        {
            activeMovie ?
                <>
                    <HeaderTop>
                        <AppTitle />
                        <SearchIconButton onClick={() => onSearchIconClick(null)} />
                    </HeaderTop>
                    <MovieDetails movie={activeMovie} />
                </> :
                <>
                    <HeaderTop>
                        <AppTitle />
                        <AddMovieButton onClick={onAddMovieClick} />
                    </HeaderTop>
                    <HeaderText>
                        FIND YOUR MOVIE
                    </HeaderText>
                    <HeaderSearch>
                        <MovieSearch />
                    </HeaderSearch>
                </>
        }
    </Wrapper>
));

export { Header };