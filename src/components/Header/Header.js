import React, { Component } from 'react'
import './Header.css'

class Header extends Component {

    switcher = () => {
        console.log('This was clciked')
    }

    state = {
        username: "Izzy-kun",
        password: "t1"
        }

    render () {
        return (
            <div className="container">
                <h1>Flexbox</h1>
                <div className="box box1">1</div>
                <div className="box box2">2</div>
                <div className="box box3">3</div>
                <div className="box box4">4</div>
                <div className="box box5">5</div>
                <div className="box box5"> { this.state.username + " " + this.state.password}</div>
                <button onClick={this.switcher}>Log something</button>
            </div>
        )
    }
}

export default Header