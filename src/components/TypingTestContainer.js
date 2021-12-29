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
  }

  useEffect(() => {
    //I might need some kind of json file where I store text data?
    //Ultimately, I suppose a lot of these strings will end up in the database
    if(text){
      dispatch(initializeText(text));
    }
  }, [dispatch]);

  return(
    <div style={typingTestStyles}>
      {!testData.finished ? <TypingTest /> : <TestResults type={type} />}
    </div>
  )
}

export default TypingTestContainer;