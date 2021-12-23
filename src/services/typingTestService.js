

const handleKeyPress = (event, currentChar, charsLeft) => {

  if(charsLeft === 0){
    return "FINISHED";
  }else if(event.key === currentChar){
    return "STEP_FORWARD";
  }

  return "MISTAKE";
}


export default { handleKeyPress }