import axios from 'axios';

const url = "http://localhost:3001/api/user";


const register = async (username, password, password_confirmed) => {
  try {
    let response = await axios.post(`${url}/register`, { username, password, password_confirmed });
    localStorage.setItem('token', JSON.stringify(response.data.token));
    
    return response;
  } catch (error) {
    throw(error);
  }
}

const logIn = async (username, password) => {
  try {
    let response = await axios.post(`${url}/login`, { username, password });
    localStorage.setItem('token', JSON.stringify(response.data.token));

    return response;
    
  } catch (error) {
    throw(error);
  }

}

const logOut = () => {
  localStorage.removeItem('token');
}

const validate = async () => {
  try {
    let response = await axios.get(`${url}/validate`, getAuthHeader());
    
    return response;
  } catch (error) {
    throw(error);
  }
}


const getAuthHeader = () => {
  const token = JSON.parse(localStorage.getItem('token'));

  if (token) {
    return { 'x-access-token': token };
  } else {
    return {};
  }
}


export default { logIn, register, validate };