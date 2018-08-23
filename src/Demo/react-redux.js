// react-redux.js
import React from 'react';
import propTypes from 'prop-types';

export class Provider extends React.Component{
  // 设置 childContext 状态值类型
  static childContextTypes = {
    store: propTypes.object
  };

  // 设置 childContext
  getChildContext(){
    return {store: this.props.store}
  }
  
  render(){
    return this.props.children;
  }
}