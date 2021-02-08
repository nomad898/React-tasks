import React from 'react'

class HelloWorldComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World! {this.props.someText}</h1>
            </div>
        )
    }
}

export default HelloWorldComponent