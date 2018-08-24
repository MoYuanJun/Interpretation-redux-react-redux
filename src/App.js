import React, { Component } from 'react';
import { createStore, applyMiddleware } from './Demo/redux';
import { Provider } from './Demo/react-redux';
import { reducer } from './Demo/reducer';
import thunk from './Demo/thunk';
import Demo from './Demo/Demo';

// 创建 store
const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    // 调用接口 Provider
    return <Provider store={store}><Demo /></Provider>;
  }
}
export default App;
