import {
    useState,
    useEffect,
    Component
} from 'react';
import {
    Main,
} from '@components/global';
import {
    MovieCatalogFilter,
    MovieCatalog
} from '@components/home';
import { MovieService } from '@containers';

// //TODO: make right order when real API
// const HomeMain = () => {
//     const [movies, setMovies] = useState([]);
//     const [genres, setGenres] = useState([]);
//     //TODO: change state to const
//     const [activeFilter, setActiveFilter] = useState('ALL');
//     const [activeSort, setActiveSort] = useState('TITLE');

//     const filterMovies = (movies) => {
//         return activeFilter === 'ALL' ?
//             movies :
//             movies
//                 .filter(
//                     movie => movie.genres
//                         .split(', ')
//                         .filter(genre => genre === activeFilter)
//                         .length > 0);
//     }

//     const sortMovies = (movies) => {
//         return movies.sort((a, b) => {
//             switch (activeSort) {
//                 case 'RELEASE_DATE':
//                     return b.releaseDate - a.releaseDate;
//                 case 'TITLE':
//                     return a.title.localeCompare(b.title);
//             }
//         });
//     }

//     useEffect(() => {
//         MovieService.getGenres()
//             .then(g => setGenres(g));
//     });

//     useEffect(() => {
//         MovieService.getMovies()
//             .then(m => {
//                 setMovies(sortMovies(filterMovies(m)));
//             });
//     }, [activeFilter, activeSort]);

//     const handleFilterChange = (e) => {
//         const filterValue = e.target.text;
//         setActiveFilter(filterValue);
//     };

//     const handleSortChange = (e) => {
//         const sortValue = e.target.value;
//         setActiveSort(sortValue);
//     }

//     return (
//         <Main>
//             <MovieCatalogFilter
//                 genres={genres}
//                 activeFilter={activeFilter}
//                 onFilterClick={handleFilterChange}
//                 onSortChange={handleSortChange}
//             />
//             <MovieCatalog
//                 movies={movies}
//             />
//         </Main>
//     )
// };

class HomeMain extends Component {

    state = {
        movies: [],
        genres: [],
        activeFilter: 'ALL',
        activeSort: 'TITLE'
    };

    componentDidMount() {
        MovieService.getMovies()
            .then(m => {
                this.setState({
                    movies: m,
                });
            });
        MovieService.getGenres()
            .then(g => {
                this.setState({
                    genres: g,
                });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.activeFilter !== this.state.activeFilter) {
            MovieService.getMovies()
                .then(m => this.sortMovies(this.filterMovies(m)))
                .then(m => this.setState({ movies: m }));
        }
        else if (prevState.activeSort !== this.state.activeSort) {
            const movies = this.sortMovies(this.state.movies);
            this.setState({ movies: movies });
        }
    }

    filterMovies = (movies) => {
        const activeFilter = this.state.activeFilter;
        return activeFilter === 'ALL' ?
            movies :
            movies
                .filter(
                    movie => movie.genres
                        .split(', ')
                        .filter(genre => genre === activeFilter)
                        .length > 0);
    }

    sortMovies = (movies) => {
        return movies.sort((a, b) => {
            switch (this.state.activeSort) {
                case 'RELEASE_DATE':
                    return b.releaseDate - a.releaseDate;
                case 'TITLE':
                    return a.title.localeCompare(b.title);
            }
        });
    }

    getMovieCatalog = (movies, filter, sort) => {
        const filtered = this.filterMovies(movies, filter);
        const sorted = this.sortMovies(filtered, sort);
        return sorted;
    }

    handleFilterChange = (e) => {
        const filterValue = e.target.text;
        this.setState({
            activeFilter: filterValue
        });
    }

    handleSortChange = (e) => {
        const sortValue = e.target.value;
        this.setState({
            activeSort: sortValue
        });
    }

    render() {
        return (
            <Main>
                <MovieCatalogFilter
                    genres={this.state.genres}
                    activeFilter={this.state.activeFilter}
                    onFilterClick={this.handleFilterChange}
                    onSortChange={this.handleSortChange}
                />
                <MovieCatalog
                    movies={this.state.movies}
                />
            </Main>
        )
    }
}

export { HomeMain };