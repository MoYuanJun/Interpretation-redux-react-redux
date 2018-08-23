// Demo.jsx
import React from 'react';
import propTypes from 'prop-types';
import './style.css';
import { changeAge, changeUser } from './actionCreate';

export default class Demo extends React.Component{
  // 设置 context 状态值类型
  static contextTypes = {
    store: propTypes.object
  };

  constructor(props, context){
    super(props, context);
    // 获取store
    this.store = context.store;
    this.state = {user: 'xxx', age: 'xxx'};
  }
  
  componentDidMount(){
    this.store.subscribe(this.update);
    this.update();
  }

  update = () => {
    this.setState(this.store.getState());
  }

  onChange = (e) => {
    this.store.dispatch(changeUser(e.target.value));
  }

  onClick = () => {
    this.store.dispatch(changeAge());
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