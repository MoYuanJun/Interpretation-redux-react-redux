// reducer.js
const initState = { user: 'qianyin', age: 18, sex: '男' };
export const reducer = (state=initState, action) => {
  switch(action.type){
    case 'USER_UPDATE':
      return {...state, ...action.payload};
    case 'AGE_GROW':
      return {...state, age: state.age + 1};
    case 'SEX_UPDATE':
      return {...state, ...action.payload};
    default:
      return state;
  }
}


