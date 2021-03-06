const initialState = {
  typedText: "",
  currentChar: "",
  color: "",
  untypedText: "",
  finished: false,

  typedTextMistakes: [{
    char: "",
    time: 0,
  }]
}

//used to measure the time difference between key presses
const measureElapsedTime = (time1, time2, time3 = time2) => {
  if(time3 !== time2){
    return time1 - time2 - time3;
  }
  return time1 - time2;
}

const updateTypedTestMistakes = (state, action) => {
  let testStartTime;
  let prevCharTimeFromStart;
  let time;
  let timeFromStart;

  if(state.typedTextMistakes.length > 0){
    testStartTime = state.typedTextMistakes[0].time;
    prevCharTimeFromStart = state.typedTextMistakes.at(-1).timeFromStart;
    time = measureElapsedTime(action.time, testStartTime, prevCharTimeFromStart);
    timeFromStart = measureElapsedTime(action.time, testStartTime);
  }else{
    testStartTime = 0;
    prevCharTimeFromStart = 0;
    time = action.time;
    timeFromStart = action.time;
  }

  return [...state.typedTextMistakes, { 
    char: action.keyPressed,
    time,
    timeFromStart,
  }]
}

const setInit = (state, action) => {
  return {
    typedText: "",
    typedTextMistakes: [],
    currentChar: action.data.charAt(0),
    untypedText: action.data.substring(1),
    color: "lightgreen",
  }
}

const setStepForward = (state, action) => {
  return {
    ...state,
    typedText: state.typedText + state.currentChar,
    typedTextMistakes: updateTypedTestMistakes(state, action),
    currentChar: state.untypedText.charAt(0),
    untypedText: state.untypedText.substring(1),
    color: "lightgreen",
  }
}
const setMistake = (state, action) => {
  return {
    ...state,
    typedTextMistakes: updateTypedTestMistakes(state, action),
    color: "lightsalmon",
  }
}

const setFinished = (state, action) => {
  let items = updateTypedTestMistakes(state, action); 
  let item = {...items[0]};
  item.time = 0;
  item.timeFromStart = 0;
  items[0] = item;

  return {
    ...state,
    typedText: state.typedText + state.currentChar,
    typedTextMistakes: items,
    finished: true,
  }
}

//if there is no text data, we will reuse the text from the previous test
const setReset = (state, action) => {
  if(!action.data){
    action.data = state.typedText;
  }

  return{
    ...initialState,
    ...setInit(state, action),
  }
}

const typingTestReducer = (state = initialState, action) => {
  switch(action.type){
    case "INIT":
      return setInit(state, action);
    case "STEP_FORWARD":
      return setStepForward(state, action);
    case "MISTAKE":
      return setMistake(state, action);
    case "FINISHED":
      return setFinished(state, action);
    case "RESET":
      return setReset(state, action);
    default: return state
  }
}

//we update state on every key press during a typing test
export const handleKeyPress = (event, currentChar, charsLeft) => {
  return dispatch => {
    event.preventDefault();

    let actionType;
    if(charsLeft === 0){
      actionType = "FINISHED";
    }else if(event.key === currentChar){
      actionType = "STEP_FORWARD";
    }else{
      actionType = "MISTAKE";
    }

    dispatch({
      type: actionType,
      keyPressed: event.key,
      time: new Date().getTime(),
    })
  }
}

export const initializeText = text => { return { data: text, type: "INIT" }}
export const resetTest = (text) => { return { data: text, type: "RESET" }}

export default typingTestReducer;