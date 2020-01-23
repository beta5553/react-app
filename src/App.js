import React from 'react'
import logo from './logo.svg'
import './App.css'
import HelloWorld from './components/HelloWorldComponent'
import Header from './components/Header/Header'
import ConstComponent from './components/ConstComponent'
import UploadFile from './components/UploadFile/UploadFile'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HelloWorld /> */}

      <br />
      <UploadFile />
      <br />

      <ConstComponent name="Nombre" edad="28">
         Aqui los niños! Estos son los hijos de este componente. <br />
         Este componente es una funcion y no una clase. 
      </ConstComponent>
    </div>
  );
}

export default App;