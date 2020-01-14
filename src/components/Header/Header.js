import React, { Component } from 'react'

class Header extends Component {

    switcher = () => {
        console.log('This was clciked')
    }

    render () {
        return (
            <div>
                <h1>Header aqui!</h1>
                <button onClick={this.switcher}>Log something</button>
            </div>
        )
    }
}

export default Header