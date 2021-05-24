import {
    useEffect,
    useCallback
} from 'react';
import {
    connect,
    useSelector,
    useDispatch
} from "react-redux";
import { useParams } from 'react-router-dom';
import { moviesThunk } from '@stores/thunks';
import {
    moviesSelector,
    paramsSelector
} from '@stores/selectors';
import { BoldText } from '@components/global';
import {
    MovieCard,
    MovieCatalogCounter
} from '@components/home';
import { MovieCatalog as Wrapper } from './MovieCatalog.styles';

const MovieCatalog = () => {
    const dispatch = useDispatch();
    const sort = useSelector(paramsSelector.selectSort);
    const filter = useSelector(paramsSelector.selectFilter);
    const movies = useSelector(moviesSelector.selectMovies);
    const total = useSelector(moviesSelector.selectTotal);

    const { search }  = useParams();

    const getMovies = (options) => {
        dispatch(moviesThunk.getMovies(options));
    };

    useEffect(() => {
        if (search) {
            getMovies({ search: search });
        }
    }, [sort, filter, search]);

    return (
        <>
            { total > 0 ?
                <>
                    <MovieCatalogCounter>
                        <span>
                            <BoldText>{total}</BoldText> movies found
                    </span>
                    </MovieCatalogCounter>
                    <Wrapper>
                        {
                            movies
                                .map((movie, idx) =>
                                    <MovieCard
                                        key={idx}
                                        movie={movie}
                                    />
                                )
                        }
                    </Wrapper>
                </>
                : <div>No movies found</div>
            }
        </>
    )
};

export { MovieCatalog };