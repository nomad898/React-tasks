import {
    Header,
    AppTitle,
    BoldText
} from '@components/global';
import { MovieSearch } from '@components/home';
import { HomeHeaderTop } from './HomeHeaderTop.styles';
import { AddMovieButton } from './AddMovieButton.styles';
import { HomeHeaderText } from './HomeHeaderText.styles';
import { HomeHeaderSearch } from './HomeHeaderSearch.styles'

const HomeHeader = () => (
    <Header>
        <HomeHeaderTop>
            <AppTitle />
            <AddMovieButton>
                <BoldText>
                    + ADD MOVIE
                </BoldText>
            </AddMovieButton>
        </HomeHeaderTop>
        <HomeHeaderText>
            FIND YOUR MOVIE
         </HomeHeaderText>
        <HomeHeaderSearch>
            <MovieSearch />
        </HomeHeaderSearch>
    </Header>
);

export { HomeHeader };