

const MistakeStats = ({ mistakeData, highlightFn }) => {
  return(
    <div>
      Mistakes:
      {mistakeData.map((mistake, index) => 
        <div onClick={() => highlightFn(mistake.expected)} key={index}>Expected: "{mistake.expected}", Typed: "{mistake.actual}"</div>
      )}
    </div>
  )
}

export default MistakeStats;