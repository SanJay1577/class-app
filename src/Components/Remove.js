import React, { Component } from "react";

export default class Remove extends Component {
    state = {
        screenSize : window.innerWidth,
        show : true
    }
    
    windowSize = () => {
        this.setState({screenSize : window.innerWidth})
    }

    toggleFunction = () => {  
        this.setState({show: !this.state.show})
    }

    componentDidMount () {
  
        window.addEventListener("resize", this.windowSize); 
    }

    //unmount the component
    componentWillUnmount(){
        console.log("unmounted")
        // remove the socket connection
        window.removeEventListener("resize", this.screenSize)
    }

    render(){
        return (
            <div>
            <div> {this.state.show === true ? `Screen size : ${this.state.screenSize}` : ""} </div>
            <button onClick={this.toggleFunction}>Remove the mount</button>
            </div>
        )
    }
}