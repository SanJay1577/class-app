import React, { Component } from "react";

export default class Toggle extends Component {
    // const [state, setState] = useState(true); 

    constructor () {
        super ()
        this.state = {
            current : "Light" 
         }
         this.handleTogggle = this.handleTogggle.bind(this)
     
    }
     

    handleTogggle () {
       this.setState(prevState => {
        return {
        current : prevState.current === "Light" ? "Dark" : "Light"
        }
       })
    }

    render (){
        return (
             <div>
            <h5>Click the toggle button to change the state</h5> 
             <h2>Current State : {this.state.current} </h2>
            <button onClick={this.handleTogggle}>Toggle me</button>
            </div>
        )
    }
}