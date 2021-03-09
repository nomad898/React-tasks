import styled from 'styled-components';
import backgroundImg from '@public/assets/images/header-blured-dark.jpg';

const Header = styled.header`
    padding: 1em 10%;
    background-image: url(${backgroundImg});
    background-size: contain;
    background-position: center;
`;

export { Header };