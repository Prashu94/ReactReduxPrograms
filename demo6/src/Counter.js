import React from "react";
class Counter extends React.Component{
    
    constructor(){
        super();
        //this.counter = 0;
        // initailizing the state 
        this.state = { // state should be assigned an Object literal with relevant attribute
            counter: 0
        }
    }

    // arrow function to increment the counter
    incrementCounter = () => {
        console.log("button clicked");
        //this.state.counter+=1; // this will not be possible ( as state is immutable)
        this.setState({counter: this.state.counter+1}) // set state method
        this.setState((prevState) => {
            return {counter: prevState.counter + 1}
        });
        this.setState((prevState) => {
            return {counter: prevState.counter + 1}
        })
        console.log("Button Clicked," , this.state.counter, "times" );
    }

    render(){
        return(
            <div>
                <button className="btn btn-primary" onClick={this.incrementCounter}> Click </button>
                <p>{this.state.counter}</p>
            </div>
        );
    }
}

export default Counter;