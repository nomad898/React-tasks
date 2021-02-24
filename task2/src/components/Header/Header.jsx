import styled from 'styled-components';
import backgroundImg from '@public/assets/images/header-background.jpg';

const HeaderStyled = styled.div`
    position: relative;
    padding-top: 20px;
    padding-left: 100px;
    padding-right: 100px;
    height: 300px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        background-image: url(${backgroundImg});
        background-size: cover;
        background-position: center;
        opacity: 0.3;
        background-color: rgba(0, 0, 0, 0.6);
        filter: blur(2px);
    };
`;

const Header = (props) => (
    <HeaderStyled>
        {props.children}
    </HeaderStyled>
);


export { Header };