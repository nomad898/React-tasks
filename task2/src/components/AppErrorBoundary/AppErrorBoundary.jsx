import React from 'react';

class AppErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {       
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {        
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {           
            return <h1>Ohhh, no... Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export { AppErrorBoundary };