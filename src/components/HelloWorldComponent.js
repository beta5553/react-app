import React, { Component } from 'react'

class HelloWorld extends Component {

    state = {
        age: 37
    }

    render() {
        return (
            <div>
                <h1>Hola mundo, mi edad: {this.state.age}</h1>
            </div>
        )
    }
}

export default HelloWorld;