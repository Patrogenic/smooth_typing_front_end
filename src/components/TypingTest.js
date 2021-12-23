import { useSelector } from 'react-redux'
import TypingTestText from './TypingTestText'


const TypingTest = () => {
  const data = useSelector(state => state);

  return(
    <div>
      <TypingTestText text={data.typedText} />
      <TypingTestText text={data.currentChar} color={data.color} />
      <TypingTestText text={data.untypedText} />
    </div> 
  )
}

export default TypingTest;