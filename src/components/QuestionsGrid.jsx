import React from "react";
import type { Tracks, TrackId } from '../constants'
import QuestionGroup from './QuestionGroup'


type Props = {
  trackIds: Array,
  tracks: Tracks,
  handleRadioSelectionFn: (TrackId, Milestone) => void
}

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
