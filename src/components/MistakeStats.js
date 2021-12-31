

const MistakeStats = ({ mistakeData, highlightFn }) => {

  const style = {
    height: 140,
    overflowY: "auto",
    paddingRight: 10,
    boxSizing: "content-box",
  }

  return(
    <div style={style}>
        Mistakes:
        {mistakeData && mistakeData.map((mistake, index) => 
          <div className="highlight-sequence" onClick={() => highlightFn(mistake.expected)} key={index}>Expected: "{mistake.expected}", Typed: "{mistake.actual}"</div>
        )}
    </div>
  )
}

export default MistakeStats;