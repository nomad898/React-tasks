import {
    useDispatch
} from "react-redux";
import { Formik, Form } from 'formik';
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
import { Movie, MovieSchema } from '@models';

const AddMovieModal = () => {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(modalsAction.showAddMovie(false));
    };

    const initialValues = {
        title: '',
        releaseDate: '',
        movieUrl: '',
        genre: '',
        overview: '',
        runtime: ''
    };

    const onSubmit = (values) => {
        event.preventDefault();
        const tagline = 'Tagline';
        const voteAverage = 10;
        const voteCount = 10;
        const budget = 1000;
        const revenue = 10;
        const toAdd = new Movie(
            values.title,
            tagline,
            voteAverage,
            voteCount,
            values.releaseDate,
            values.movieUrl,
            values.overview,
            budget,
            revenue,
            values.genre,
            Number(values.runtime));
        dispatch(moviesThunk.addMovie(toAdd));
        dispatch(moviesThunk.getMovies());
        dispatch(modalsAction.showAddMovie(false));
    };

    return (
        <Modal title="ADD MOVIE" onCloseClick={handleClose}>
            <Formik
                initialValues={initialValues}
                validationSchema={MovieSchema}
                onSubmit={onSubmit}>
                {({ errors, touched, validateField, validateForm }) => (
                    <Form>
                        <ModalInput name="title" type="text" label="TITLE" placeholder="Enter movie title" />
                        <ModalInput name="releaseDate" type="text" label="RELEASE DATE" placeholder="Select Date" />
                        <ModalInput name="movieUrl" type="text" label="MOVIE URL" placeholder="Movie URL here" />
                        <ModalInput name="genre" type="text" label="GENRE" placeholder="Select Genre" />
                        <ModalInput name="overview" type="text" label="OVERVIEW" placeholder="Overview here" />
                        <ModalInput name="runtime" type="text" label="RUNTIME" placeholder="Runtime here" />
                        <ModalFormFooter>
                            <ResetButton type="reset">
                                RESET
                            </ResetButton>
                            <SubmitButton type="submit">
                                SUBMIT
                            </SubmitButton>
                        </ModalFormFooter>
                    </Form>
                )}
            </Formik>
        </Modal>
    )
};

export { AddMovieModal };