import userService from '../services/userService';


const initialState = {
  isLoggedIn: false,
  username: "",
  authErrors: "",
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case "LOG_IN_SUCCESS":
      return { username: action.data.username, isLoggedIn: true };
    case "LOG_IN_FAILURE":
      return { ...state, authErrors: action.errors };
    case "REGISTER_SUCCESS":
      return { username: action.data.username, isLoggedIn: true };
    case "REGISTER_FAILURE":
      return { ...state, authErrors: action.errors };
    case "LOG_OUT":
      return { ...initialState };
    default: return state;
  }
}

//front end validation might take place here (we'll worry about validation later)
export const logIn = (username, password) => (dispatch) => { 

  userService.logIn(username, password).then(response => {
    dispatch({
      type: "LOG_IN_SUCCESS",
      data: response.data,
    })
  }, error => {
    const message = error?.response?.data?.error || error?.message || error.toString();
    dispatch({
      type: "LOG_IN_FAILURE",
      errors: message,
    })
  });
};

export const register = (username, password, passwordConfirmed) => (dispatch) => {

  userService.register(username, password, passwordConfirmed).then(response => {
    console.log(response);
    dispatch({
      type: "REGISTER_SUCCESS",
      data: response.data,
    })
  }, error => {
    const message = error?.response?.data?.error || error?.message || error.toString();
    dispatch({
      type: "REGISTER_FAILURE",
      errors: message,
    })
  })
}

export const logOut = () => { return { type: "LOG_OUT" } };


export default userReducer;