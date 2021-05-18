import {
    useState,
    useCallback
} from 'react';
import {
    Header,
    Main,
    AddMovieModal
} from '@components/home';
import { Footer } from '@components/global';
import { useCountRenders } from '@utils/hooks';

const Home = () => {
    const [activeMovie, setActiveMovie] = useState(null);

    const handleShowMovie = useCallback(
        (movie) => setActiveMovie(movie),
        []
    );

    const [isAddMovieShown, setIsAddMovieShown] = useState(false);

    const handleCloseAddMovieModal = () => setIsAddMovieShown(false);

    const handleAddMovieSubmit = () => alert('Saved! Actually not...');

    const handleShowAddMovieModal = useCallback(
        () => setIsAddMovieShown(true),
        []
    );

    useCountRenders('Home');

    return (
        <>
            <Header
                activeMovie={activeMovie}
                onSearchIconClick={handleShowMovie}
                onAddMovieClick={handleShowAddMovieModal}
            />
            <Main
                onMovieClick={handleShowMovie}
            />
            <Footer />
            {
                isAddMovieShown && <AddMovieModal
                    onSubmit={handleAddMovieSubmit}
                    onCloseClick={handleCloseAddMovieModal}
                />
            }
        </>
    )
};

export { Home };