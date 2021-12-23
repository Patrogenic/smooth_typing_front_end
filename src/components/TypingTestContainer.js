import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleKeyPress, initializeText } from "../reducers/typingTestReducer"
import TypingTest from "./TypingTest"
import TestResults from "./TestResults"

const TypingTestContainer = () => {
  const dispatch = useDispatch();
  const testData = useSelector(state => state);

  const typingTestStyles = {
    backgroundColor: "white",
    width: 600,
    height: 400,
    margin: "0 auto",
    fontFamily: "monospace",
    fontSize: 20,
  }

  useEffect(() => {
    dispatch(initializeText("Some Text"));
  }, []);

  return(
    <div style={typingTestStyles} onKeyPress={event => dispatch(handleKeyPress(event, testData.currentChar, testData.untypedText.length))} tabIndex="0">
      {!testData.finished ? <TypingTest /> : <TestResults />}
    </div>
  )
}

export default TypingTestContainer;