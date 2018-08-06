import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Counter = (props) => {
    return(
		<li style={{backgroundColor:props.counter.color}} onClick={() =>
		props.countUp(props.counter)} >
            {props.counter.id}:{props.counter.count}
        </li>
    );
}

const CounterList = (props) => {
	const counters = props.counters.map(counter => {
    return(
      <Counter 
			counter = {counter}
			key = {counter.id}
			countUp = {props.countUp}
      />
        )
    })
    return(
        <ul>
        {counters}
        </ul>
    );
}

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            counters: [
                {id: 'A',count: 0,color: 'tomato'},
                {id: 'B',count: 0,color: 'skyblue'},
                {id: 'C',count: 0,color: 'limegreen'}
            ]
		};
		this.count
    }
    render(){
        return (
            <div className="container">
				<CounterList 
					counters={this.state.counters}
				/>
                <div>TOTALINVENTORY: 3
                </div>
            </div>
        )
    }
}

export default App;
