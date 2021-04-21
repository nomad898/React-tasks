import { memo } from 'react';
import {
    Header,
    AppTitle,
    BoldText
} from '@components/global';
import {
    MovieSearch,
    MovieDetails
} from '@components/home';
import { HomeHeaderTop } from './HomeHeaderTop.styles';
import { HomeHeaderText } from './HomeHeaderText.styles';
import { HomeHeaderSearch } from './HomeHeaderSearch.styles'
import { AddMovieButton } from './AddMovieButton';
import { SearchIconButton } from './SearchIconButton';
import { useCountRenders } from '@utils';

const HomeHeader = memo((props) => {

    useCountRenders('HomeHeader');

    return (
        <Header>
            {
                props.activeMovie ?
                    <>
                        <HomeHeaderTop>
                            <AppTitle />
                            <SearchIconButton onSearchIconClick={() => props.onSearchIconClick(null)} />
                        </HomeHeaderTop>
                        <MovieDetails movie={props.activeMovie} />
                    </> :
                    <>
                        <HomeHeaderTop>
                            <AppTitle />
                            <AddMovieButton onAddMovieClick={props.onAddMovieClick} />
                        </HomeHeaderTop>
                        <HomeHeaderText>
                            FIND YOUR MOVIE
                        </HomeHeaderText>
                        <HomeHeaderSearch>
                            <MovieSearch />
                        </HomeHeaderSearch>
                    </>
            }
        </Header>
    )
});

export { HomeHeader };