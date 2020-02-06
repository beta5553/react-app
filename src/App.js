import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ConstComponent from './components/ConstComponent'
import UploadFile from './components/UploadFile/UploadFile'
import Footer from './components/Footer/Footer'
import MediaCard from './components/MediaCard/MediaCard'

class App extends Component {

  state = {
    showMediaCards: true,
    showOtherThings: false
  }

   toggleContent = () => {
    console.log("showMediaCards: " + this.state.showMediaCards)
    
    if (this.state.showMediaCards === true) {
      this.setState({showMediaCards: false}) }
     else {
      this.setState({showMediaCards: true})
    }
  }

  render () {
    return (
      <div className="App">


        {/* <Header /> */}

        {/* <HelloWorld /> */}
        <br />
        <UploadFile />
        <br />

        <ConstComponent name="Nombre" edad="28">
          Aqui los niños! Estos son los hijos de este componente. <br />
          Este componente es una funcion y no una clase. 
        </ConstComponent>

        <button onClick={this.toggleContent}>
          Toggle content
        </button> 
        
        {
        this.state.showMediaCards === true ? 
        <div>
          <div className="flexContainer">
            <div><MediaCard /></div>
            <div><MediaCard /></div>
            <div><MediaCard /></div>
            <div><MediaCard /></div>
          </div>
        </div>
        : null 
        } 

        <Footer />
      </div>
    );
  }  
}

export default App;