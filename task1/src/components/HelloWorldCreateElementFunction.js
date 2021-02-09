import React from 'react'

function HelloWorldCreateElementFunction() {
    return React.createElement(
        'div', {},
        React.createElement('h1', {}, 'Hello World! This is Create Element!')
    );
}
export default HelloWorldCreateElementFunction