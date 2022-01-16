import QuestionMark from './QuestionMark'

const SequenceStats = ({ type, sequences, highlightFn }) => {
  const helpText = `These are the sequences of characters you typed the ${type.toLowerCase()}.`;

  const headerStyles = {
    fontSize: 25,
    display: "inline-block",
  }

  return(
    <div>
      <div style={headerStyles}>{type}:</div> <QuestionMark text={helpText} />
      {sequences && sequences.map(seq => 
        <div title="Click to Hightlight Sequence" className="underline" onClick={() => highlightFn(seq.seq)} key={seq.seq}>"{seq.seq}": {Math.round(48 / (seq.avgTime / 1000) * 10) / 10} WPM ({seq.instances})</div>  
      )}
    </div>
  )
}

export default SequenceStats;