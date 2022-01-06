import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showHighlights } from '../reducers/testResultsReducer'
import TestHighlights from './TestHighlights';
import SequenceStats from './SequenceStats';
import MistakeStats from './MistakeStats';

const TestDetails = ({ testDetails }) => {
  const dispatch = useDispatch();
  const testData = useSelector(state => state.typingTest);
  const [highlights, setHighlights] = useState([<span key={1}>{testData.typedText}</span>]);

  const statsStyle = {
    marginTop: 40,
    display: "flex",
    justifyContent: "space-around"
  }

  const highlightStyle = {
    backgroundColor: "lightgreen",
  }

  const highlightSequence = (seq) => {
    const len = seq.length;
    let highlights = [];
    let post = testData.typedText;
    let key = 0;

    while(post.indexOf(seq) !== -1 && len != 0){
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
    <div>
      <div>
        <TestHighlights highlights={highlights} />
        <div style={statsStyle}>
          <SequenceStats type="Fastest" sequences={testDetails.bestSequences} highlightFn={highlightSequence} />
          <SequenceStats type="Slowest" sequences={testDetails.worstSequences} highlightFn={highlightSequence} />
          <MistakeStats mistakeData={testDetails.mistakeData} highlightFn={highlightSequence} />
        </div>
      </div>
    </div>
  )
}

export default TestDetails;