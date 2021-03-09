import { 
    MovieSortDropdown as Wrapper,
    MovieSortText,
    Dropdown
} from './MovieSortDropdown.styles';

const MovieSortDropdown = () => (
    <Wrapper>
        <MovieSortText>
            SORT BY 
        </MovieSortText>
        <Dropdown>
            <option value="0">RELEASE DATE</option>
            <option value="1">TITLE</option>
        </Dropdown>
    </Wrapper>
);

export { MovieSortDropdown };