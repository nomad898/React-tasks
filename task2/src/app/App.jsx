import { App as Wrapper } from './App.styles';
import { AppErrorBoundary } from '@components/global';
import { Home } from '@pages';
import '@styles/reset.css';
import '@styles/roboto.css';
import '@styles/style.scss'

const App = () => (
    <AppErrorBoundary>
        <Wrapper id="app">
            <Home />
        </Wrapper>
    </AppErrorBoundary>
);

export { App };