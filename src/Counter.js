import React from 'react';
export default class Counter extends React.Component{
    render(){
        constructor(){
            super();
            this.state = {
                correntNumber: 0,

            };
        }
        return(
            <div>
                <span> {this.state.correntNumber} </span>
                <button onClick={() => this.increment()}>Increment</button>

            </div>
        )
    }
}