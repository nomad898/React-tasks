import { SearchIconButton as Wrapper } from './HeaderButton.styles';
import SearchIcon from '@public/assets/images/search-icon.svg';

const SearchIconButton = (
    {
        onClick
    }) => (
    <Wrapper onClick={onClick}>
        <img src={SearchIcon} />
    </Wrapper>
);

export { SearchIconButton };