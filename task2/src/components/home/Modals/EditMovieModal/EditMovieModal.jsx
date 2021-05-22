import { useState } from 'react';
import {
    useDispatch
} from "react-redux";
import {
    modalsAction
} from '@stores/actions';
import { moviesThunk } from '@stores/thunks';
import { Movie } from '@models';
import {
    Modal,
    ModalInput,
    ModalFormFooter,
    ResetButton,
    SubmitButton
} from '@components/global';

const EditMovieModal = ({ movie }) => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(movie.title);
    const [releaseDate, setReleaseDate] = useState(movie.releaseDate.toDateString());
    const [movieUrl, setMovieUrl] = useState(movie.posterPath);
    const [genre, setGenre] = useState(movie.genres.join(', '));
    const [overview, setOverview] = useState(movie.overview);
    const [runtime, setRuntime] = useState(movie.runtime);
    const [id] = useState(movie.id);

    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleChangeReleaseDate = (event) => {
        setReleaseDate(event.target.value);
    };

    const handleChangeMovieUrl = (event) => {
        setMovieUrl(event.target.value);
    };

    const handleChangeGenre = (event) => {
        setGenre(event.target.value);
    };

    const handleChangeOverview = (event) => {
        setOverview(event.target.value);
    };

    const handleChangeRuntime = (event) => {
        setRuntime(event.target.value);
    };

    const handleClose = () => {
        dispatch(modalsAction.showEditMovie({ show: false, movieId: null }));
    };

    const handleSubmit = () => {
        event.preventDefault();
        let tagline = movie.tagline;
        if (tagline === '') {
            tagline = ' '
        }
        const formattedReleaseDate = new Date(movie.releaseDate);
        const toEdit = new Movie(
            title,
            tagline,
            movie.voteAverage,
            movie.voteCount,
            formattedReleaseDate,
            movieUrl,
            overview,
            movie.budget,
            movie.revenue,
            genre.split(', '),
            runtime,
            movie.id);
        dispatch(moviesThunk.editMovie(toEdit));
        dispatch(moviesThunk.getMovies());
        dispatch(modalsAction.showEditMovie({ show: false, movieId: null }));
    };

    return (
        <Modal title="EDIT MOVIE" onCloseClick={handleClose}>
            <form onSubmit={handleSubmit}>
                <ModalInput text="ID" placeholder="Movie ID" disabled={true} defaultValue={movie.id} />
                <ModalInput text="TITLE" placeholder="Enter movie title" defaultValue={title} onChange={handleChangeTitle} />
                <ModalInput text="RELEASE DATE" placeholder="Select Date" defaultValue={releaseDate} onChange={handleChangeReleaseDate} />
                <ModalInput text="MOVIE URL" placeholder="Movie URL here" defaultValue={movieUrl} onChange={handleChangeMovieUrl} />
                <ModalInput text="GENRE" placeholder="Select Genre" defaultValue={genre} onChange={handleChangeGenre} />
                <ModalInput text="OVERVIEW" placeholder="Overview here" defaultValue={overview} onChange={handleChangeOverview} />
                <ModalInput text="RUNTIME" placeholder="Runtime here" defaultValue={runtime} onChange={handleChangeRuntime} />
                <ModalFormFooter>
                    <ResetButton type="reset">
                        RESET
                    </ResetButton>
                    <SubmitButton type="submit">
                        Save
                </SubmitButton>
                </ModalFormFooter>
            </form>
        </Modal>
    );
}

export { EditMovieModal };