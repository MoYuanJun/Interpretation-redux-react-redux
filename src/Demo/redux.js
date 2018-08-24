
export const createStore = (reducer, middlerware) => {
  if(middlerware){
    return middlerware(createStore)(reducer);
  }

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

export const bindactioncreators = (mapDispatchToProps, dispatch) => {
  const actionFun = {};
  // 遍历 mapDispatchToProps 中每个 action 创建函数 并使用 dispatch 包裹后返回
  for(let key in mapDispatchToProps){
    actionFun[key] = (...args) => {
      dispatch(mapDispatchToProps[key](...args));
    }
  }

  return actionFun;
  // 一种简写方式： 骚操作
  // return actionFun = Object.keys(mapDispatchToProps)
  //  .reduce((total, item) => {
  //    return { ...total, [item]: (...args) => {dispatch(mapDispatchToProps[item](...args));}
  //   } } ,{});
}

export const applyMiddleware = (middleware) =>  (createStore) => (redux)=> {
  const store = createStore(redux);

  // 获取 getState 已经重写后的 dispatch
  const midApi = {
    getState: store.getState,
    dispatch: (...args) => {dispatch(...args)}
  };

  // 调用中间件 扩展 dispatch
  const dispatch = middleware(midApi)(store.dispatch);

  return {
    ...store,
    dispatch
  };
}