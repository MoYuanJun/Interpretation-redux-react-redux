// thunk 中间件实现异步
const thunk = ({dispatch, getState}) => next => (action) => {
  if( typeof action === 'function' ){
    return action(dispatch, getState);
  } else {
    return next(action);
  }
}

export default thunk;