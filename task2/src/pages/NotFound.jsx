import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Main, Footer, AppTitle, RedButton } from '@components/global';

const Wrapper = styled.div(`

`);

const NotFound = () => {

    return (
        <Wrapper>
            <AppTitle />
            <Main>
                PAGE NOT FOUND - 404
                <Link to="/search">
                    <RedButton>
                        GO BACK TO HOME
                    </RedButton>
                </Link>
            </Main>
            <Footer />
        </Wrapper>
    );
}

export { NotFound };