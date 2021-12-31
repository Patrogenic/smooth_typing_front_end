

const SequenceStats = ({ type, sequences, highlightFn }) => {

  return(
    <div>
      {type}:
      {sequences && sequences.map(seq => 
        <div className="highlight-sequence" onClick={() => highlightFn(seq.seq)} key={seq.seq}>"{seq.seq}": {Math.round(48 / (seq.avgTime / 1000) * 10) / 10} WPM ({seq.instances})</div>  
      )}
        {/* <div className="highlight-sequence" onClick={() => highlightFn(seq.seq)} key={seq.seq}>"{seq.seq}", WPM: {Math.round(48 / (seq.avgTime / 1000) * 10) / 10}, Freq: {seq.instances}  </div>   */}

    </div>
  )
}

export default SequenceStats;