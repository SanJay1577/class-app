import React, { Component } from 'react';
import './App.css';
import Greetings from './Components/Greetings';
import Header from './Components/Header';
import Toggle from './Components/Toggle';

// function App() {
//   return (
//     <div className="App">
//        App
//     </div>
//   );
// }

export default class App extends Component {
  //function
  render () {
    return (
      <div>
        <h1>Welcome to {this.props.type} Component </h1>
        <Header name= "Sanjay"/>
        <Greetings/>
      <div>
        <h4>Toogle functionaly in class</h4>
        <Toggle/>
        
      </div>
        </div>
    )
  }
}
