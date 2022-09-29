import React, { Component } from 'react';
import './App.css';
import Counter from './Components/Counter';
import Greetings from './Components/Greetings';
import Header from './Components/Header';
import Remove from './Components/Remove';
import Toggle from './Components/Toggle';

// function App() {
//   return (
//     <div className="App">
//        App
//     </div>
//   );
// }

export default class App extends Component {
//Life cycle of a componet 
//initiation 
  state = {
    counter : 1,
    nameObject : {},
  }

// useEffect(() => {
//   fetchfunctionality()
// }, [counter])
// MOunting......
  componentDidMount () {
    console.log("mounting is happening")
    this.nextPerson(this.state.counter)

  }
//updation.....
  componentDidUpdate(prevProps, prevState){
    console.log("Updation is done"); 
    if(prevState.counter !== this.state.counter){
      this.nextPerson(this.state.counter); 
    }
  }

  countPlus =  () =>{ 
    this.setState({counter:this.state.counter +1})
  }

   
  nextPerson (idx) {
    fetch(`https://swapi.dev/api/people/${idx}`)
    .then(res => res.json())
    .then(data => this.setState({nameObject:data}));
  }


  render () {
    console.log("rendering the component")
    return (
      <div>
        <h1>Welcome to {this.props.type} Component </h1>
        <Header name= "Sanjay"/>
        <Greetings/>
        <button
        onClick={this.countPlus}
        >Click me for next person {this.state.counter}</button>
        <h1 style={{color:"blue"}}>
          {this.state.nameObject.name || "Fetching...."}
        </h1>
      <div>
        <h4>Toogle functionaly in class</h4>
        <Toggle/>
        
      </div>
      <div>
        <h3>Counter functionality</h3>
        <Counter/>
      </div>

      <h2>UN mounting example</h2>
      <Remove/>
        </div>
    )
  }
}
