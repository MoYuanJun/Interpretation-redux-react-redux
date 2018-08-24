// Demo.jsx
import React from 'react';
// 导入 asyncChangeAge
import { changeAge, changeUser, asyncChangeAge } from './actionCreate';
import { connect } from './react-redux';
import './style.css';

const mapStateToProps = (state) => {
  return {user: state.user, age: state.age};
}

// 添加 asyncChangeAge
@connect(mapStateToProps, {changeAge, changeUser, asyncChangeAge})
export default class Demo extends React.Component{
  onChange = (e) => {
    this.props.changeUser(e.target.value);
  }
  onClick = () => {
      this.props.changeAge();
  }
  // 点击事件
  onClickAsync = () => {
    this.props.asyncChangeAge();
  }
  render(){
    return (
      <div>
        <p>user: {this.props.user}, age: {this.props.age}</p>
        user: 
        <input type="text" className="input" onChange={this.onChange}/>
        &nbsp;
        <button className="btn" onClick={this.onClick}>年龄增长</button>
        {/* 新增按钮 */}
        <button className="btn" onClick={this.onClickAsync}>
        	异步增长
        </button>
      </div>
    );
  }
}