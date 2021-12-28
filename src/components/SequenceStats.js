

const SequenceStats = ({ type, sequences, highlightFn }) => {
  return(
    <div>
      {type}:
      {sequences.map(seq => 
        <div onClick={() => highlightFn(seq.seq)} key={seq.seq}>"{seq.seq}", Time: {seq.avgTime}, Occurrences: {seq.instances}  </div>  
      )}
    </div>
  )
}

export default SequenceStats;