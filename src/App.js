import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorldComponent';
import Header from './components/Header/Header'
import ConstComponent from './components/ConstComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <br />
      
      <Header />
      <HelloWorld />

      <ConstComponent name="Nombre" edad="28">
         Aqui los niños! Estos son los hijos de este componente. <br />
         Este componente es una funcion y no una clase. 
      </ConstComponent>
    </div>
  );
}

export default App;