export const changeUser = (user) => {
  return {
    payload:{user},
    type: 'USER_UPDATE',
  };
}

export const changeAge = () => {
  return { type: 'AGE_GROW' };
}