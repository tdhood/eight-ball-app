import { defaultAnswers } from "./answers";
import { getRandom } from "./random";
import React, { useState } from "react";

/** Displays message and color when clicked
 * 
 * Props:
 * -answers
 * ex: [{msg: "It is certain.", color: "green" }, ...]
 * 
 * State:
 * -Answer: 
 * ex: {msg: "It is certain.", color: "green" }
 * 
 * App -> EightBall
 */
function EightBall({ answers=defaultAnswers }) {
  console.log("EightBall", answers);

  const [answer, setAnswer] = useState({
    msg: "Think of a Question",
    color: "black",
  });

  const index = getRandom(answers.length);

  const eightBallStyle = {
    color: "white",
    backgroundColor: answer.color,
    borderRadius: "50%",
    height: "100px",
    width: "100px",
    padding: "100px"
  };

  return (
    <div>
      <div
        style={eightBallStyle}
        onClick={() => setAnswer(answers[index])}
      >{ answer.msg }</div>
    </div>
  );
}

export default EightBall