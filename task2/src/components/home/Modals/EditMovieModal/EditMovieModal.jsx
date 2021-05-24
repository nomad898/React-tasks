import { useState } from 'react';
import {
    useDispatch
} from "react-redux";
import { Formik, Form } from 'formik';
import {
    modalsAction
} from '@stores/actions';
import { moviesThunk } from '@stores/thunks';
import { Movie, MovieSchema } from '@models';
import {
    Modal,
    ModalInput,
    ModalFormFooter,
    ResetButton,
    SubmitButton
} from '@components/global';

const EditMovieModal = ({ movie }) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(modalsAction.showEditMovie(false));
    };

    const initialValues = {
        title: movie.title,
        releaseDate: movie.releaseDate,
        movieUrl: movie.posterPath,
        genre: movie.genres.join(', '),
        overview: movie.overview,
        runtime: movie.runtime,
        id: movie.id
    };

    const onSubmit = (values) => {
        event.preventDefault();
        let tagline = movie.tagline;
        if (tagline === '') {
            tagline = ' '
        }
        const toEdit = new Movie(
            values.title,
            tagline,
            movie.voteAverage,
            movie.voteCount,
            new Date(values.releaseDate),
            values.movieUrl,
            values.overview,
            movie.budget,
            movie.revenue,
            values.genre.split(','),
            Number(values.runtime),
            movie.id);
        dispatch(moviesThunk.editMovie(toEdit));
        dispatch(moviesThunk.getMovies());
        dispatch(modalsAction.showEditMovie({ show: false, movieId: null }));
    };

    return (
        <Modal title="EDIT MOVIE" onCloseClick={handleClose}>
            <Formik
                initialValues={initialValues}
                validationSchema={MovieSchema}
                onSubmit={onSubmit}>
                {({ errors, touched, validateField, validateForm }) => (
                    <Form>
                        <ModalInput name="id" label="ID" placeholder="Movie ID" disabled={true}/>
                        <ModalInput name="title" label="TITLE" placeholder="Enter movie title" />
                        <ModalInput name="releaseDate" label="RELEASE DATE" placeholder="Select Date" />
                        <ModalInput name="movieUrl" label="MOVIE URL" placeholder="Movie URL here" />
                        <ModalInput name="genre" label="GENRE" placeholder="Select Genre" />
                        <ModalInput name="overview" label="OVERVIEW" placeholder="Overview here" />
                        <ModalInput name="runtime" label="RUNTIME" placeholder="Runtime here" />
                        <ModalFormFooter>
                            <ResetButton type="reset">
                                RESET
                            </ResetButton>
                            <SubmitButton type="submit">
                                Save
                            </SubmitButton>
                        </ModalFormFooter>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
}

export { EditMovieModal };