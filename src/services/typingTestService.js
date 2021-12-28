import axios from 'axios';

const url = "http://localhost:3001/api/typingtest";

const sendTestData = async (data) => {
  let response = await axios.post(url, data);

  return response;
}


const handleKeyPress = (event, currentChar, charsLeft) => {
  event.preventDefault();

  if(charsLeft === 0){
    return "FINISHED";
  }else if(event.key === currentChar){
    return "STEP_FORWARD";
  }

  return "MISTAKE";
}


export default { handleKeyPress, sendTestData }