// Demo.jsx
import React from 'react';
import { changeAge, changeUser } from './actionCreate';
import { connect } from './react-redux';
import './style.css';

const mapStateToProps = (state) => {
  return {user: state.user, age: state.age};
}

@connect(mapStateToProps, {changeAge, changeUser})
export default class Demo extends React.Component{
  onChange = (e) => {
    this.props.changeUser(e.target.value);
  }
  onClick = () => {
    this.props.changeAge();
  }
  render(){
    return (
      <div>
        <p>user: {this.props.user}, age: {this.props.age}</p>
        user: 
        <input type="text" className="input" onChange={this.onChange}/>
        &nbsp;
        <button className="btn" onClick={this.onClick}>年龄增长</button>
      </div>
    );
  }
}