import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeText } from "../reducers/typingTestReducer"
import TypingTest from "./TypingTest"
import TestResults from "./TestResults"

const TypingTestContainer = ({ text, type }) => {
  const dispatch = useDispatch();
  const testData = useSelector(state => state.typingTest);

  const typingTestStyles = {
    position: "relative",
    backgroundColor: "white",
    width: 900,
    height: 500,
    padding: 10,
    margin: "0 auto",
    fontSize: 20,
    borderRadius: 10,
    boxShadow: "5px 5px 15px #075d8f",
  }

  useEffect(() => {
    if(text){
      dispatch(initializeText(text));
    }
  }, [dispatch, text]);

  return(
    <div style={typingTestStyles}>
      {!testData.finished ? <TypingTest /> : <TestResults type={type} />}
    </div>
  )
}

export default TypingTestContainer;