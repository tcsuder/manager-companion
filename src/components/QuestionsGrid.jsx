import React from "react";
import QuestionGroup from './QuestionGroup'


function QuestionsGrid({trackIds, tracks, handleRadioSelectionFn}) {
  return (
    <div>
      {trackIds.map((trackId, trackIndex) => {
        return (
          <div key={trackIndex} className='quiz-section'>
            <h1 className='quiz-section-heading'>{tracks[trackId].longDisplayName}</h1>
            <QuestionGroup
              trackId={trackId}
              trackIndex={trackIndex}
              questions={tracks[trackId].questions}
              handleRadioSelectionFn={(track, question, milestone) => handleRadioSelectionFn(track, question, milestone)} />
            </div>
          )
        })}
    </div>
  )
}

export default QuestionsGrid
