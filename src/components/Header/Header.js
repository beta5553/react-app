import React, { Component } from 'react'
import './Header.css'

class Header extends Component {

    switcher = () => {
        console.log('This was clciked')
    }

    render () {
        return (
            <div>
                <h1>Header aqui</h1>
                <button onClick={this.switcher}>Log something</button>
                <div className="box">1</div>
                <div className="box">2</div>
                <div className="box">3</div>
                <div className="box">4</div>
            </div>
        )
    }
}

export default Header