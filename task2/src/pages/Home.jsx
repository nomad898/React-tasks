import {
    Header,
    Main
} from '@components/home';
import { Footer } from '@components/global';
import { useCountRenders } from '@utils/hooks';

const Home = () => {    
    useCountRenders('Home');

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
};

export { Home };