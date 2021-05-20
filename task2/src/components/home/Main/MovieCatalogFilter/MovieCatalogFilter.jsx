import { useEffect } from "react";
import {
    connect,
    useSelector,
    useDispatch
} from "react-redux";
import {
    bindActionCreators
} from "redux";
import {
    MovieSort,
    MovieSortText,
    MovieSortDropdown,
    MovieGenre,
    MovieGenreList
} from '@components/home';
import {
    moviesSelector,
    paramsSelector
} from '@stores/selectors';
import {
    paramsAction
} from '@stores/actions';
import {
    FilterType,
    SortType
} from '@utils/constants';
import { MovieCatalogFilter as Wrapper } from './MovieCatalogFilter.styles';

const MovieCatalogFilter = ({
    changeFilter,
    changeSort
}) => {

    const filter = useSelector(paramsSelector.selectFilter);
    const sort = useSelector(paramsSelector.selectSort);

    const genres = Object.entries(FilterType).map(([k, v]) => (v));
    const sorts = Object.entries(SortType).map(([k, v]) => ( { key: k, value: v }));

    return (
        <Wrapper>
            <MovieGenreList>
                {
                    genres
                        .map((genre, idx) =>
                            <MovieGenre
                                href={`#${genre}`}
                                key={idx}
                                isActive={genre === filter}
                                onClick={changeFilter}
                            >
                                {genre}
                            </MovieGenre>
                        )
                }
            </MovieGenreList>
            <MovieSort>
                <MovieSortText>
                    SORT BY
            </MovieSortText>
                <MovieSortDropdown value={sort} onChange={changeSort}>
                    {
                        sorts
                            .map((s, idx) =>
                                <option key={idx} value={s.value} style={{ color: 'black' }}>
                                    {s.key}
                                </option>
                            )
                    }
                </MovieSortDropdown>
            </MovieSort>
        </Wrapper>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilter: (event) => dispatch(paramsAction.filterChange(event.target.text)),
        changeSort: (event) => dispatch(paramsAction.sortChange(event.target.value)),
    }
}

export default connect(null, mapDispatchToProps)(MovieCatalogFilter);