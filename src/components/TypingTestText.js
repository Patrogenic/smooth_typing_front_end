

const TypingTestText = ({text, color}) => {

  const textStyle = {
    backgroundColor: color || "transparent"
  }

  return(
    <span style={textStyle}>
      {text}
    </span>
  )

}

export default TypingTestText;