import userService from '../services/userService';


const initialState = {
  isLoggedIn: false,
  username: "",
  authErrors: "",
  typingData: [],
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case "LOG_IN_SUCCESS":
      return { username: action.username, typingData: action.typingData, isLoggedIn: true };
    case "LOG_IN_FAILURE":
      return { ...state, authErrors: action.errors };
    case "REGISTER_SUCCESS":
      return { username: action.username, isLoggedIn: true };
    case "REGISTER_FAILURE":
      return { ...state, authErrors: action.errors };
    case "LOG_OUT":
      return { ...initialState };
    case "NEW_TEST":
      return { ...state, typingData: [...state.typingData, action.newTestData] };
    default: return state;
  }
}

//front end validation might take place here (we'll worry about validation later)
export const logIn = (username, password) => (dispatch) => { 

  userService.logIn(username, password).then(response => {
    if(response.data.errors){
      throw(response.data.errors);
    }
    dispatch({
      type: "LOG_IN_SUCCESS",
      data: response.data,
      username: response.data.username,
      typingData: response.data.typingData,
    })
    window.location.reload();
  }, error => {
    const message = error?.response?.data?.error || error?.message || error.toString();
    dispatch({
      type: "LOG_IN_FAILURE",
      errors: message,
    })
  }).catch(errors => {
    console.log(errors);
    const message = errors.map(error => error.msg).toString();
    dispatch({
      type: "LOG_IN_FAILURE",
      errors: message,
    })
  });
};

export const register = (username, password, passwordConfirmed) => (dispatch) => {

  userService.register(username, password, passwordConfirmed).then(response => {
    if(response.data.errors){
      throw(response.data.errors);
    }
    dispatch({
      type: "REGISTER_SUCCESS",
      username: response.data.username,
    })
    window.location.reload();
  }, error => {
    const message = error?.response?.data?.error || error?.message || error.toString();
    dispatch({
      type: "REGISTER_FAILURE",
      errors: message,
    })
  }).catch(errors => {
    console.log(errors);
    const message = errors.map(error => error.msg).toString();
    dispatch({
      type: "LOG_IN_FAILURE",
      errors: message,
    })
  });
}

export const logOut = () => { 
  userService.logOut();
  return { type: "LOG_OUT" }
};

export const newTest = (newTestData) => { return { newTestData, type: "NEW_TEST" } };


export default userReducer;