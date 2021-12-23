import { useSelector } from 'react-redux'

const TestResults = () => {
  const testData = useSelector(state => state);
  const mistakes = testData.typedTextMistakes.length - testData.typedText.length;
  const testTimeElapsed = testData.typedTextMistakes.at(-1).timeFromStart / 1000;

  return(
    <div>
      <div>Test Finished in {testTimeElapsed} seconds.</div>
      <div>This is the text: {testData.typedText}</div>
      This is what you typed: {testData.typedTextMistakes.map(item => item.char)}
      <div>{testData.typedTextMistakes.map((item, index) => 
        <div key={index}>{item.char + " " + item.time + " ms"}</div>)}
      </div>
    </div>
  )
}

export default TestResults;