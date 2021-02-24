import styled from 'styled-components';

const MainStyled = styled.div`    
    padding-left: 70px;
    padding-right: 70px;
`;

const Main = (props) => (
        <MainStyled>
            {props.children}
        </MainStyled>
    );

export { Main };