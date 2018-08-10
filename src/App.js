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
        );
    });
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
                {id: 'A',count: 0,color: 'salmon'},
                {id: 'B',count: 0,color: 'skyblue'},
				{id: 'C',count: 0,color: 'palegreen'},
				{id: 'D',count: 0,color: 'peachpuff'},
				{id: 'E',count: 0,color: 'thistle'},
				{id: 'F',count: 0,color: 'silver'},
				{id: 'G',count: 0,color: 'silver'},
				{id: 'h',count: 0,color: 'silver'}
			],
			total: 0
		};
		this.countUp = this.countUp.bind(this);
	}
	countUp(counter){
		this.setState(prevState =>{
			const counters = prevState.counters.map(counter=>{
				return {id: counter.id,count: counter.count,color: counter.color};
			});
			const pos = counters.map(counter => {
				return counter.id;
			}).indexOf(counter.id);
			counters[pos].count++;
			return{
				counters: counters,
				total: prevState.total + 1
			};
		});
	}
    render(){
        return (
            <div className="container">
				<CounterList 
					counters={this.state.counters}
					countUp={this.countUp}
				/>
                <div>TOTALINVENTORY: {this.state.total}
                </div>
            </div>
        )
	}
}

export default App;
