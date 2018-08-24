export const changeUser = (user) => {
  return {
    payload:{user},
    type: 'USER_UPDATE',
  };
}

export const changeAge = () => {
  return { type: 'AGE_GROW' };
}

export const asyncChangeAge = () => {
  return (dispatch, getState) => {
    setTimeout(v=>{
      console.log('==>', getState());
      dispatch({type: 'AGE_GROW'});
    }, 1000);
  }
}