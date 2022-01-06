import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import typingTestService from '../services/typingTestService'
import TestDetails from './TestDetails'
import { nextSlide } from '../reducers/introTestReducer'
import { resetTest } from '../reducers/typingTestReducer';
import { newTest } from '../reducers/userReducer';
import { aboutText } from '../data/textData'

const TestResults = ({ type }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [ testDetails, setTestDetails ] = useState({})
  const testData = useSelector(state => state.typingTest);
  const testResults = useSelector(state => state.testResults);
  const introTest = useSelector(state => state.introTest);
  const mistakes = testData.typedTextMistakes.length - testData.typedText.length;
  const testTimeElapsed = Math.round(testData.typedTextMistakes.at(-1).timeFromStart / 10) / 100;
  const wpm = Math.round(60 * (testData.typedText.length / 5) / testTimeElapsed);
  const accuracy = Math.round(1000 * ( testData.typedText.length - mistakes ) / testData.typedText.length) / 10;

  const buttonStyle = {
    position: "absolute",
    bottom: 40,
    right: 50,
    backgroundColor: "#db9a2a",
    borderRadius: 3,
    padding: 5,
    border: "none",
    fontSize: 20,
  }

  const statsWrapper = {
    width: "100%",
    position: "absolute",
    bottom: 100,
    display: "flex",
    justifyContent: "space-around"
  }

  useEffect(() => {
    let newTestData = { text: testData.typedText, typedText: testData.typedTextMistakes, wpm, accuracy, time: testTimeElapsed };
    typingTestService.sendTestData(newTestData).then(res => {
      setTestDetails(res.data);
      dispatch(newTest(newTestData));
    });

    if(type === "site intro" && introTest.textSlide + 1 < aboutText.length){
      return () => {
        console.log(introTest.textSlide);
        dispatch(nextSlide());
        dispatch(resetTest());
      }
    }else{
      return () => {
        setTestDetails({});
      }
    }
  }, [])

  const handleContinue = () => {
    dispatch(resetTest(" "));
  }

  const handleContinueToTests = () => {
    dispatch(resetTest());
    history.push('/test');
  }

  const handleNewTest = () => {
    window.location.reload();
  }

  return(
    <div className="fade">
      <TestDetails testDetails={testDetails}/>
      <div style={statsWrapper}>
        <div>Time: {testTimeElapsed} sec</div>
        <div>WPM: {wpm}</div>
        <div>Accuracy: {accuracy} %</div>
      </div>

      {testResults.showDetails && <TestDetails testDetails={testDetails}/>}

      {type === "site intro" && (!introTest.finished ? 
        <button style={buttonStyle} className="hover" onClick={handleContinue}>Continue</button> :
        <a style={buttonStyle} className="hover" onClick={handleContinueToTests}>Continue to Tests</a>)}

      {type === "test" && <button style={buttonStyle} className="hover" onClick={handleNewTest}>Next Test</button>}

    </div>
  )
}

export default TestResults;