// Demo.jsx
import React from 'react';
import './style.css';
import { changeAge, changeUser } from './actionCreate';
import { reducer } from './reducer';
import { createStore } from './redux';

const store = createStore(reducer);

export default class Demo extends React.Component{
  state = {user: 'xxx', age: 'xxx'};
  componentDidMount(){
    store.subscribe(this.update);
    this.update();
  }

  update = () => {
    this.setState(store.getState());
  }

  onChange = (e) => {
    store.dispatch(changeUser(e.target.value));
  }

  onClick = () => {
    store.dispatch(changeAge());
  }

  render(){
    return (
      <div>
        <p>user: {this.state.user}, age: {this.state.age}</p>
        user: 
        <input type="text" className="input" onChange={this.onChange}/>
        &nbsp;
        <button className="btn" onClick={this.onClick}>年龄增长</button>
      </div>
    );
  }
}