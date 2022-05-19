let initialState = {
  id: '',
  password: '',
  authenticate: false
}

function authenticateReducer(state=initialState, action) {
  let {type, payload} = action;
  switch(type) {
    case "LOGOUT":
      console.log("logout reducer")
      return { ...state, authenticate: payload.authenticate };
    case "LOGIN_SUCCESS":
      console.log("login reducer")
      return { ...state, id: payload.id, password: payload.password, authenticate: true };
    default:
      return { ...state };
  }
}

export default authenticateReducer;