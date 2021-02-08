import React from 'react'

class HelloWorldPureComponent extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>Hello World! {this.props.someText}</h1>
            </div>
        )
    }
}

export default HelloWorldPureComponent