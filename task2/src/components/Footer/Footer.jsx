import styled from 'styled-components';

const FooterStyled = styled.div`
    padding: 15px 10px;
    background-color: #424242;
    text-align: center;
`;

const Footer = (props) => (
    <FooterStyled>
        {props.children}
    </FooterStyled>
);

export { Footer };