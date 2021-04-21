import { SearchIconButton as Wrapper } from './HeaderButton.styles';
import SearchIcon from '@public/assets/images/search-icon.svg';

const SearchIconButton = (props) => (
    <Wrapper onClick={props.onSearchIconClick}>
        <img src={SearchIcon} />
    </Wrapper>
);

export { SearchIconButton };