import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import typingTestService from '../services/typingTestService'
import TestDetails from './TestDetails'
import { showDetails } from '../reducers/testResultsReducer'
import { nextSlide } from '../reducers/introTestReducer'
import { resetTest } from '../reducers/typingTestReducer';
import { aboutText } from '../data/textData'

const TestResults = ({ type }) => {
  const dispatch = useDispatch();
  const [ testDetails, setTestDetails ] = useState({})
  const testData = useSelector(state => state.typingTest);
  const testResults = useSelector(state => state.testResults);
  const introTest = useSelector(state => state.introTest);
  const mistakes = testData.typedTextMistakes.length - testData.typedText.length;
  const testTimeElapsed = Math.round(testData.typedTextMistakes.at(-1).timeFromStart / 10) / 100;
  const wpm = Math.round(60 * (testData.typedText.length / 5) / testTimeElapsed);
  const accuracy = Math.round(1000 * ( testData.typedText.length - mistakes ) / testData.typedText.length) / 10 + "%";

  const testResultsStyle = {
    fontFamily: "sans-serif",
  }

  //work on button positioning
  const buttonStyle = {
    position: "absolute",
    bottom: 25,
    right: 35,
  }


  const statsWrapper = {
    width: "100%",
    position: "absolute",
    bottom: 70,
    display: "flex",
    justifyContent: "space-around"
  }

  const finishedStyle = {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 50,
  }

  useEffect(() => {
    //async
    //send { text: typedText, typedText: typedTextMistakes } (I will need to work on more uniform naming conventions)
    //no error checking? (what happens when the server is not running)
    typingTestService.sendTestData({ text: testData.typedText, typedText: testData.typedTextMistakes }).then(res => {
      setTestDetails(res.data);
    });
  }, [])

  //results view will vary based on the type of test

  const handleContinue = () => {
    dispatch(resetTest(aboutText[introTest.textSlide + 1]));
    dispatch(nextSlide());
  }

  return(
    <div>
      <TestDetails testDetails={testDetails}/>
      {/* <div style={finishedStyle}>Finished!</div> */}
      <div style={statsWrapper}>
        <div>Time: {testTimeElapsed} sec</div>
        <div>WPM: {wpm}</div>
        <div>Accuracy: {accuracy}</div>
      </div>
      {/* <button style={buttonStyle} onClick={() => dispatch(showDetails())}>Details</button> */}

      {testResults.showDetails && <TestDetails testDetails={testDetails}/>}

      {/* I need to increment a value that represents where the user is in the intro texts and then have a value that will reset the test */}
      {type === "site intro" && !introTest.finished && <button style={buttonStyle} onClick={handleContinue}>Continue</button>}
      
      {introTest.finished && <Link to="/test">Continue to Tests</Link>}

      {type === "test" && <button style={buttonStyle}>Next Test</button>}

    </div>
  )
}

export default TestResults;