import React from 'react';
export default class Counter extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {
            correntNumber: 0,
        }
    }

    increment(){
        this.setState( (prevState) => ({
            correntNumber: prevState.correntNumber + 1
        }))
    }

    render(){
        return(
            <div>
                <span> {this.state.correntNumber} </span>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}