import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeText } from "../reducers/typingTestReducer"
import TypingTest from "./TypingTest"
import TestResults from "./TestResults"

const TypingTestContainer = () => {
  const dispatch = useDispatch();
  const testData = useSelector(state => state.typingTest);

  const typingTestStyles = {
    position: "relative",
    backgroundColor: "white",
    width: 600,
    height: 400,
    padding: 10,
    margin: "0 auto",
    fontFamily: "monospace",
    fontSize: 20,
  }

  useEffect(() => {
    //I might need some kind of json file where I store text data?
    //Ultimately, I suppose a lot of these strings will end up in the database
    dispatch(initializeText("This is the landing page. This is where I will introduce the website."));
  }, [dispatch]);

  return(
    <div style={typingTestStyles}>
      {!testData.finished ? <TypingTest /> : <TestResults />}
    </div>
  )
}

export default TypingTestContainer;