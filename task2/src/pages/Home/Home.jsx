import {
    useState,
    useRef,
    Component
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

    const handleShowMovie = (movie) => setActiveMovie(movie);

    const [isAddMovieShown, setIsAddMovieShown] = useState(false);

    const handleCloseAddMovieModal = () => setIsAddMovieShown(false);
    const handleShowAddMovieModal = () => setIsAddMovieShown(true);

    const handleAddMovieSubmit = () => alert('Saved! Actually not...');

    return (
        <>
            <HomeHeader
                activeMovie={activeMovie}
                showAddMovieModal={handleShowAddMovieModal}
            />
            <HomeMain
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

// class Home extends Component {
//     state = {
//         activeMovie: null,
//         isAddMovieShown: false
//     };

//     handleShowMovie(movie) {
//         this.setState({
//             activeMovie: movie
//         });
//     }

//     handleShowAddMovieModal(shouldShow) {
//         this.setState({
//             isAddMovieShown: shouldShow
//         });
//     }

//     handleAddMovieSubmit() {
//         alert('Saved! Actually not...');
//     }

//     render() {
//         return (
//             <>
//                 <HomeHeader
//                     activeMovie={this.state.activeMovie}
//                     showAddMovieModal={this.handleShowAddMovieModal}
//                 />
//                 <HomeMain
//                     handleShowMovie={this.handleShowMovie}
//                 />
//                 <Footer />
//                 {
//                     this.state.isAddMovieShown && <AddMovieModal
//                         onSubmit={this.handleAddMovieSubmit}
//                         onCloseClick={this.handleShowAddMovieModal}
//                     />
//                 }
//             </>
//         )
//     }
// }

export { Home };