import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from 'react-router-dom';
import { Home, NotFound } from '@pages';

const routes = [
    {
        path: '/search',
        component: Home,
        routes: [
            {
                path: '/search/:value',
                component: Home,
            }
        ]
    },
    {
        path: '/film',
        component: Home,
        routes: [
            {
                path: '/film/:id',
                component: Home,
            }
        ]
    },
    {
        path: '*',
        component: NotFound
    }
]

const RouteWithSubRoutes = (route) => {
    return (
        <Route path={route.path} exact={route.exact}>
            <route.component />
        </Route>
    )
}

const AppSwitch = () => {
    return (
        <Switch>       
            {routes.map((route) => (
                <RouteWithSubRoutes key={route.path} {...route} />
            ))}
        </Switch >
    );
};

const AppRouter = (props) => {
    return (
        <Router>
            {props.children}
            <AppSwitch />
        </Router>
    )
};

export { AppRouter }