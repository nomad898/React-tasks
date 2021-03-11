import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    AppErrorBoundaryGlobal as Global,
    AppErrorBoundaryLocal as Local,
} from './AppErrorBoundary.styles';

class AppErrorBoundary extends Component {

    state = {
        hasError: false
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            const localBoundary = this.props.localBoundary;
            return (
                <>
                    {
                        localBoundary
                            ? <Local>
                                {localBoundary}
                            </Local>
                            : <Global>
                                <h1>Ohhh, no... Something went wrong.</h1>
                            </Global>
                    }
                </>
            );
        }
        return this.props.children;
    }
}

AppErrorBoundary.propTypes = {
    localBoundary: PropTypes.element
};
export { AppErrorBoundary };