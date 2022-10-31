import React, { Component } from "react";

class Hello extends Component {
  // property name
  movieName = "Harry Potter";
  // Arrow function to use the movieName
  printMovie = () => {
    return (
      <h4>
        My Favourite Movie is:
        <span className="text-info">{this.movieName}</span>
      </h4>
    );
  };

  // call the render method 
  render(){
    return (
        <div>
            {this.printMovie()}
        </div>
    )
  };
}

export default Hello;