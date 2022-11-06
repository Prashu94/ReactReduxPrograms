import React, { Component } from 'react';

class State extends Component {
    state = {
      showText: ''
    }
    onShow = () => {
      this.setState({showText: 'Hello React!'});
    }

    onHide = () => {
      this.setState({showText: ''})
    }
    render() {
        return (
            <React.Fragment>
              <button onClick={this.onShow}>Show text</button>
              <h1> {this.state.showText}</h1>
              <button onClick={this.onHide}>Hide text</button>
            </React.Fragment>
        );
    }
}

export default State;