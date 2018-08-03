import React from "react";

function QuestionLine({question}) {
  return (
    <div className='box question-text' style={{ fontSize: '1em' }}>
      <p>{question}</p>
    </div>
  )
}

export default QuestionLine
