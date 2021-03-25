import {
    useState,
    useRef
} from 'react';
import {
    HomeHeader,
    HomeMain,
    AddMovieModal
} from '@components/home';
import { Footer } from '@components/global';

const Home = (props, state) => {
    const addMovieModalRef = useRef(null);
    const closeAddMovieButtonRef = useRef(null);


    const [activeMovie, setActiveMovie] = useState(null);

    const handleShowMovie = (movie) => {
        setActiveMovie(movie);
    };

    const [isAddMovieShown, setIsAddMovieShown] = useState(false);

    const handleCloseAddMovieModal = () => {
        setIsAddMovieShown(false);
    };
    const handleShowAddMovieModal = () => setIsAddMovieShown(true);
    const handleAddMovieSubmit = () => alert('Saved! Actually not...');

    return (
        <>
            <HomeHeader
                activeMovie={activeMovie}
                showAddMovieModal={handleShowAddMovieModal}
            />
            <HomeMain
                handleShowMovie={handleShowMovie}
            />
            <Footer />
            {
                isAddMovieShown && <AddMovieModal
                    onSubmit={handleAddMovieSubmit}
                    modalRef={addMovieModalRef}
                    closeButtonRef={closeAddMovieButtonRef}
                    onCloseClick={handleCloseAddMovieModal}
                />

                // isEditMovieShown && <>
            }
        </>
    )
};

export { Home };