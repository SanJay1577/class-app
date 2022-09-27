import React, { Component } from "react";

export default class Greetings extends Component {
    render () {
        
        const date = new Date(); 
        const hours = date.getHours(); 

        let currentTime; 
        if(hours < 12) {
            currentTime = "morning"
        }else if(hours >= 12 && hours <17){
            currentTime = "afternoon"
        } else {
            currentTime = "night"
        }

        return (
           <h1>Good {currentTime} to you sir</h1> 
        )
    }
}