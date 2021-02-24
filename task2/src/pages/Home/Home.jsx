import { Header, Main, Footer, AppTitle } from '@components';
import { MovieCatalog } from './components/MovieCatalog/MovieCatalog';
import { AddMovieButton } from './components/AddMovieButton/AddMovieButton';
import styled from 'styled-components';
import { MovieSearch } from './components/MovieSearch/MovieSearch';
import { MovieSort } from './components/MovieSort/MovieSort';

const MarginWrapperStyled = styled.div`
    margin-top: 10px;
    margin-bottom: 30px;
`;

const PaddingWrapperStyled = styled(MarginWrapperStyled)`
    padding: 10px 50px;
`;

const HeaderTopStyled = styled(MarginWrapperStyled)`
    position: relative;
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: baseline;
    align-content: center;    
`;

const HeaderTextStyled = styled(PaddingWrapperStyled)`
    position: relative;
    color: #ffffff;
    font-size: 32px;
`;

const HeaderSearchStyled = styled(PaddingWrapperStyled)`
    position: relative;
    display: flex;
    flex-direction: row;
	flex-wrap: wrap;
    justify-content: space-between;
	align-items: center;
`;

const Home = (props, state) => (
    <>
        <Header>
            <HeaderTopStyled>
                <AppTitle />
                <AddMovieButton />
            </HeaderTopStyled>
            <HeaderTextStyled>
                FIND YOUR MOVIE
            </HeaderTextStyled>
            <HeaderSearchStyled>
                <MovieSearch />
            </HeaderSearchStyled>
        </Header>
        <Main>
            <MovieSort />
            <MovieCatalog />
        </Main>
        <Footer>
            <AppTitle />
        </Footer>
    </>
);

export { Home };