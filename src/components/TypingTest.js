import { useDispatch, useSelector } from 'react-redux'
import TypingTestText from './TypingTestText'
import { handleKeyPress } from '../reducers/typingTestReducer'

const TypingTest = () => {
  const dispatch = useDispatch();
  const testData = useSelector(state => state.typingTest);

  const style = {
    width: "100%",
    height: "100%",
    fontFamily: "monospace",
  }

  return(
    <div style={style} onKeyPress={event => dispatch(handleKeyPress(event, testData.currentChar, testData.untypedText.length))} tabIndex="0">
      <TypingTestText text={testData.typedText} textColor="grey" />
      <TypingTestText text={testData.currentChar} color={testData.color} />
      <TypingTestText text={testData.untypedText} />
    </div> 
  )
}

export default TypingTest;