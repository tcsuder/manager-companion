// @flow

import React from 'react';
import TrackSelector from './TrackSelector';
import NightingaleChart from '../components/NightingaleChart';
// import KeyboardListener from '../components/KeyboardListener'
import TrackDetail from '../components/TrackDetail';
import { eligibleTitles, trackIds } from '../constants';
import { Link } from 'react-router-dom';

// const quizResultToState = (props: QuizResults): ?SnowflakeAppState => {
//   const result = defaultState()
//   if (!props || !props.answerValues || !props.name) return result
//
//    // set answer values into returned state object
//   const milestoneValues = Array.from(props.answerValues.toString()).map(Number);
//   if (!milestoneValues) return result
//   trackIds.forEach((trackId, i) => {
//     result.milestoneByTrack[trackId] = milestoneValues[i]
//   })
//   // set inputted name into returned state object
//   result.name = props.name
//   return result
// }

function SnowFlake(props) {
  return (
    <div>
      <div style={{display: 'flex',
        borderBottom: '2px solid #ccc',
        paddingBottom: '20px'
      }}>
        <div style={{flex: 1,
          maxWidth:'45%'}}>
          <h1 className='name-display'>
            { props.name || <pre style={{margin:'0'}}> </pre> }
          </h1>
          <TrackSelector
            milestoneByTrack={props.milestoneByTrack}
            focusedTrackId={props.focusedTrackId}
            setFocusedTrackIdFn={props.setFocusedTrackIdFn} />
        </div>
        <div style={{flex: 0,
          display:'flex',
          justifyContent:'flex-end',
          alignItems:'center',
          minWidth: '55%'}}>
          <NightingaleChart
            setFocusedTrackIdFn={props.setFocusedTrackIdFn}
            milestoneByTrack={props.milestoneByTrack}
            handleTrackMilestoneChangeFn={(track, milestone) => props.handleTrackMilestoneChangeFn(track, milestone)} />
        </div>
      </div>
      <TrackDetail
        milestoneByTrack={props.milestoneByTrack}
        trackId={props.focusedTrackId}
        handleTrackMilestoneChangeFn={(track, milestone) => props.handleTrackMilestoneChangeFn(track, milestone)} />
    </div>
  );
}

export default SnowFlake;
