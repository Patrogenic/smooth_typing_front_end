import { useState } from 'react';

const QuestionMark = ({text}) => {
  const [ display, setDisplay ] = useState("none");
  const [ helpTextCords, setHelpTextCords ] = useState({ x: 0, y: 0 });

  const containerStyles = {
    display: "inline-block",
  }

  const questionMarkStyles = {
    width: 20,
    height: 20,
    fontSize: 17,
    borderRadius: "100%",
    border: "2px solid black",
    textAlign: "center",
    display: "inline-block",
    fontWeight: "bold",
  }

  let helpTextStyle = {
    backgroundColor: "white",
    padding: 5,
    width: 200,
    height: 100,
    border: "1px solid black",
    borderRadius: 4,
    position: "fixed",
    display: display,
    top: helpTextCords.y - 110,
    left: helpTextCords.x + 5,
  }

  const handleOnMouseOver = () => {
    setDisplay("block");
  }

  const handleOnMouseOut = () => {
    setDisplay("none");
  }

  const handleOnMouseMove = (event) => {
    let x = event.clientX;
    let y = event.clientY;

    setHelpTextCords({ x, y });
  }
  
  return(
    <div style={containerStyles}>
      <div onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut} onMouseMove={handleOnMouseMove} style={questionMarkStyles}>?</div>
      <div style={helpTextStyle} className="fade">{text}</div>
    </div>
  )
}

export default QuestionMark;