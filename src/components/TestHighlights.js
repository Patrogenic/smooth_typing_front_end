

const TestHighlights = ({ highlights }) => {
  const style = {
    backgroundColor: "white",
    fontFamily: "monospace",
    border: "1px solid black",
    padding: 5,
    height: 92,
    overflowY: "auto",
    boxSizing: "content-box",
    borderRadius: 4,
  }

  return(
    <div style={style}>
      {highlights.map(element => element)}
    </div>
  )
}

export default TestHighlights;