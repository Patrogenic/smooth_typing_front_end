import QuestionMark from './QuestionMark';

const MistakeStats = ({ mistakeData, highlightFn }) => {
  const helpText = "This list of mistakes shows what you typed and what you should have typed.";

  const containerStyles = {
    height: 140,
    overflowY: "auto",
    paddingRight: 10,
    boxSizing: "content-box",
  }

  const headerStyles = {
    fontSize: 25,
    display: "inline-block",
  }

  return(
    <div style={containerStyles}>
        <div style={headerStyles}>Mistakes:</div> <QuestionMark text={helpText} />
        {mistakeData && mistakeData.map((mistake, index) => 
          <div className="underline" onClick={() => highlightFn(mistake.expected)} key={index}>Typed: "{mistake.actual}", Expected: "{mistake.expected}"</div>
        )}
    </div>
  )
}

export default MistakeStats;