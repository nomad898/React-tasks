import { AppErrorBoundary } from './AppErrorBoundary/AppErrorBoundary';
import { AppRouter } from './AppRouter/AppRouter';
import '@styles/style.scss'

const App = () => (
    <AppErrorBoundary>
        <AppRouter />
    </AppErrorBoundary>
);

export { App };