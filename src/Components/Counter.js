import React, { Component } from "react";

export default class Counter extends Component{
    //const [count, setCount] = useState(0)
    constructor () {
        super()
        this.state = {
            count : 0
        }
        this.increment = this.increment.bind(this); 
        this.decrement = this.decrement.bind(this); 

    }

 

    increment  ()  {
        this.setState(preveCount => ({count: preveCount.count + 1}) )
    }

    decrement ()  {
        this.setState(preveCount => ({count : preveCount.count - 1}))
    }


    render () {
        return (
            <div>
            <div>Counter</div>
           <h4> {this.state.count} </h4>  
           <button onClick={this.increment}>Add</button> {" "}
           <button onClick={this.decrement}>Sub</button>
           </div>
        )
    }
}