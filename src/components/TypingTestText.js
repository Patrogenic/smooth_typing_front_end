

const TypingTestText = ({text, color, textColor}) => {

  const textStyle = {
    backgroundColor: color || "transparent",
    color: textColor || "inherit",
  }

  return(
    <span style={textStyle}>
      {text}
    </span>
  )

}

export default TypingTestText;