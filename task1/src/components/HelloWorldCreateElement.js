import React from 'react'

const HelloWorldCreateElement = React.createElement(
    'div', {},
    React.createElement('h1', {}, 'Hello World!')
);

export default HelloWorldCreateElement