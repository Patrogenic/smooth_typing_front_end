

const TestHighlights = ({ highlights }) => {
  const style = {
    backgroundColor: "white",
  }

  return(
    <div style={style}>
      {highlights.map(element => element)}
    </div>
  )
}

export default TestHighlights;