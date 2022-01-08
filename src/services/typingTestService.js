import axios from 'axios';
import userService from "./userService";

const url = "http://smoothtyping.com/api/typingtest";

const sendTestData = async (data) => {
  let response = await axios.post(url, data, userService.getAuthHeader());

  return response;
}

export default { sendTestData }