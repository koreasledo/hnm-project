function login (id, password){
  return (dispatch, getState) => {
    console.log("login action")
    dispatch({type: "LOGIN_SUCCESS", payload: { id, password }});
  };
}

function logout (authenticate) {
  return (dispatch) => {
    console.log("logout action");
    dispatch({type: "LOGOUT", payload: { authenticate }})
  }
}

export const authenticateAction = { login, logout };