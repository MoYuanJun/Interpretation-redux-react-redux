
export const createStore = (reducer) => {
  // 声明常量
  let state;
  const listeners = [];

  // 获取状态
  const getState = () => {
    return state;
  }

  // 添加监听对象
  const subscribe = (listener) => {
    listeners.push(listener);
  }

  // [1]执行reducer修改状态 [2]遍历执行监听对象
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(v => v());
  }

  // 初始化 state
  dispatch({type: '%$&HJKAJJHDJHJ'});

  // 暴露接口
  return {getState, subscribe, dispatch};
}