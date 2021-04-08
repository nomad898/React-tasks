import {
    Header,
    AppTitle,
    BoldText
} from '@components/global';
import { MovieSearch } from '@components/home';
import { HomeHeaderTop } from './HomeHeaderTop.styles';
import { HomeHeaderText } from './HomeHeaderText.styles';
import { HomeHeaderSearch } from './HomeHeaderSearch.styles'
import { AddMovieButton } from './AddMovieButton.styles';

const HomeHeader = (props) => {
    return (
        <Header>
            <HomeHeaderTop>
                {
                    props.activeMovie ?
                        <div>
                        </div> :
                        <>
                            <AppTitle />
                            <AddMovieButton onClick={props.showAddMovieModal}>
                                <BoldText>
                                    + ADD MOVIE
                                </BoldText>
                            </AddMovieButton>
                        </>
                }

            </HomeHeaderTop>
            <HomeHeaderText>
                FIND YOUR MOVIE
         </HomeHeaderText>
            <HomeHeaderSearch>
                <MovieSearch />
            </HomeHeaderSearch>
        </Header>
    )
};

export { HomeHeader };