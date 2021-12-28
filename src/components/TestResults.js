import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import typingTestService from '../services/typingTestService'
import TestDetails from './TestDetails'
import { showDetails } from '../reducers/testResultsReducer'

const TestResults = () => {
  const dispatch = useDispatch();
  const [ testDetails, setTestDetails ] = useState({})
  const testData = useSelector(state => state.typingTest);
  const testResults = useSelector(state => state.testResults);
  const mistakes = testData.typedTextMistakes.length - testData.typedText.length;
  const testTimeElapsed = testData.typedTextMistakes.at(-1).timeFromStart / 1000;
  const wpm = Math.round(60 * (testData.typedText.length / 5) / testTimeElapsed);
  const accuracy = Math.round(1000 * ( testData.typedText.length - mistakes ) / testData.typedText.length) / 10 + "%";

  //work on button positioning
  const buttonStyle = {
    position: "absolute",
    bottom: 20,
    right: 20,
  }

  useEffect(() => {
    //async
    //send { text: typedText, typedText: typedTextMistakes } (I will need to work on more uniform naming conventions)
    //no error checking? (what happens when the server is not running)
    typingTestService.sendTestData({ text: testData.typedText, typedText: testData.typedTextMistakes }).then(res => {
      setTestDetails(res.data);
    });
  }, [])

  return(
    <div>
      <div>Test Finished in {testTimeElapsed} seconds.</div>
      <div>WPM: {wpm}</div>
      <div>Accuracy: {accuracy}</div>
      <button style={buttonStyle} onClick={() => dispatch(showDetails())}>Details</button>

      {testResults.showDetails && <TestDetails testDetails={testDetails}/>}

    </div>
  )
}

export default TestResults;