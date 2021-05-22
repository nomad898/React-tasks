import { useState } from 'react';
import {
    useDispatch
} from "react-redux";
import {
    modalsAction
} from '@stores/actions';
import { moviesThunk } from '@stores/thunks';
import {
    Modal,
    ModalInput,
    ModalFormFooter,
    ResetButton,
    SubmitButton
} from '@components/global';
import { Movie } from '@models';

const AddMovieModal = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [movieUrl, setMovieUrl] = useState('');
    const [genre, setGenre] = useState('');
    const [overview, setOverview] = useState('');
    const [runtime, setRuntime] = useState('');

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
        dispatch(modalsAction.showAddMovie(false));
    };

    const handleSubmit = () => {
        event.preventDefault();
        const tagline = ' ';
        const voteAverage = 0;
        const voteCount = 0;
        const formattedReleaseDate = new Date(releaseDate);
        const budget = 0;
        const revenue = 0;
        const toAdd = new Movie(
            title,
            tagline,
            voteAverage,
            voteCount,
            formattedReleaseDate,
            movieUrl,
            overview,
            budget,
            revenue,
            genre.split(', '),
            Number(runtime));
        dispatch(moviesThunk.addMovie(toAdd));
        dispatch(moviesThunk.getMovies());
        dispatch(modalsAction.showAddMovie(false));
    };

    return (
        <Modal title="ADD MOVIE" onCloseClick={handleClose}>
            <form onSubmit={handleSubmit}>
                <ModalInput text="TITLE" placeholder="Enter movie title" onChange={handleChangeTitle} />
                <ModalInput text="RELEASE DATE" placeholder="Select Date" onChange={handleChangeReleaseDate} />
                <ModalInput text="MOVIE URL" placeholder="Movie URL here" onChange={handleChangeMovieUrl} />
                <ModalInput text="GENRE" placeholder="Select Genre" onChange={handleChangeGenre} />
                <ModalInput text="OVERVIEW" placeholder="Overview here" onChange={handleChangeOverview} />
                <ModalInput text="RUNTIME" placeholder="Runtime here" onChange={handleChangeRuntime} />
                <ModalFormFooter>
                    <ResetButton type="reset">
                        RESET
                    </ResetButton>
                    <SubmitButton type="submit">
                        SUBMIT
                </SubmitButton>
                </ModalFormFooter>
            </form>
        </Modal>
    )
};

export { AddMovieModal };