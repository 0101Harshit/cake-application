import React from 'react'
import { Component } from 'react';


class ClassBase extends Component {
    constructor()
    {
        super();
        this.state = { randomNumber: Math.random() };
    }
    click=()=> {
        
        this.setState({randomNumber: Math.random()});
      }
    render() {
        return (

            <div>
                <h1>Random Number = {this.state.randomNumber}</h1>
                <input type="button" onClick={this.click} value="click here"></input>
            </div>

        );
    }
}
export default ClassBase;

