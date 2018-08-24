// react-redux.js
import React from 'react';
import propTypes from 'prop-types';
import { bindactioncreators } from './redux';
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

export const connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
  return class NewComponent extends React.Component{
    static contextTypes = {
      store: propTypes.object
    };
    constructor(props, context){
      super(props, context);
      this.store = context.store;
      this.state = {};
    }
    componentDidMount(){
      this.store.subscribe(this.update);
      this.update();
    }
  
    update = () => {
      const state = this.store.getState();
      const filterState = mapStateToProps(state);
      
      // 调用 API bindactioncreators 
      // 对 mapDispatchToProps 内每个 action 创建函数使用 dispatch 进行包裹后返回
      const actionFun = bindactioncreators(mapDispatchToProps, this.store.dispatch);
      this.setState({...filterState, ...actionFun});
    }
    render(){
      return <Component {...this.state} />
    }
  }
}



