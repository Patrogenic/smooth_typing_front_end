import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideDetails, showHighlights } from '../reducers/testResultsReducer'
import TestHighlights from './TestHighlights';
import SequenceStats from './SequenceStats';
import MistakeStats from './MistakeStats';

//https://www.w3schools.com/howto/howto_css_modals.asp
const TestDetails = ({ testDetails }) => {
  const dispatch = useDispatch();
  const testData = useSelector(state => state.typingTest);
  const [highlights, setHighlights] = useState([<span>{testData.typedText}</span>]);

  const modalStyle = {
    display: "block", /* Hidden by default */
    position: "fixed", /* Stay in place */
    zIndex: 1, /* Sit on top */
    left: 0,
    top: 0,
    width: "100%", /* Full width */
    height: "100%", /* Full height */
    overflow: "auto", /* Enable scroll if needed */
    backgroundColor: "rgb(0,0,0)", /* Fallback color */
    backgroundColor: "rgba(0,0,0,0.4)", /* Black w/ opacity */
  }
  const modalContentStyle = {
    // position: "relative",
    backgroundColor: "#fefefe",
    margin: "150px auto", /* 15% from the top and centered */
    padding: 20,
    border: "1px solid #888",
    width: "80%", /* Could be more or less, depending on screen size */
    maxWidth: 700,
  }

  const highlightStyle = {
    backgroundColor: "lightgreen",
  }

  const highlightSequence = (seq) => {
    const len = seq.length;
    let highlights = [];
    let post = testData.typedText;
    let key = 0;

    while(post.indexOf(seq) !== -1){
      let index = post.indexOf(seq);
      let pre = post.slice(0, index);
      let target = post.slice(index, index + len);
      post = post.slice(index + len);

      highlights.push(<span key={key++}>{pre}</span>);
      highlights.push(<span key={key++} style={highlightStyle}>{target}</span>);
    }

    highlights.push(<span key={key}>{post}</span>);

    setHighlights(highlights);
    dispatch(showHighlights());
  }

  return(
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <SequenceStats type="Best" sequences={testDetails.bestSequences} highlightFn={highlightSequence} />
        <SequenceStats type="Worst" sequences={testDetails.worstSequences} highlightFn={highlightSequence} />
        <MistakeStats mistakeData={testDetails.mistakeData} highlightFn={highlightSequence} />
        <br/>
        <TestHighlights highlights={highlights} />
        {/* {testResults.showHighlights && <TestHighlights highlights={highlights} />} */}
        <button onClick={() => dispatch(hideDetails())}>Close</button>
      </div>
    </div>
  )
}

export default TestDetails;