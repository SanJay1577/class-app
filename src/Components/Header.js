import React, { Component } from "react";

export default class Header extends Component {
    render () {
        return (
            <h1>Welcome Mr. {this.props.name}</h1>
        )
    }
}