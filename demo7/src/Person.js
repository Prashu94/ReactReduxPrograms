import React, { Component } from "react";

class Person extends Component{
    render(){
        return(
            <h4 className="text-center">
                <span className="text-primary">{this.props.name}<span>'s</span></span> favourite fruit is
                <span className="text-primary"> {this.props.fruit}</span>
            </h4>
        )
    }
}

export default Person;