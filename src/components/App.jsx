// @flow

import React from "react";
import { tracks, trackIds, } from '../constants'
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from './Header';
import CompanionQuiz from './CompanionQuiz';
import SnowFlake from './SnowFlake'

const defaultState = () => {
  return {
    name: '',
    nameInputted: false,
    quizSubmitted: false,
    menuOpen: false,
    milestoneMatrix: {
      'SELF': {
        '0': 0,
        '1': 0,
        '2': 0,
      },
      'TEAM': {
        '0': 0,
        '1': 0,
        '2': 0,
      },
      'PEERS': {
        '0': 0,
        '1': 0,
        '2': 0,
      },
      'SUPERIORS': {
        '0': 0,
        '1': 0,
        '2': 0,
      },
      'BUSINESS': {
        '0': 0,
        '1': 0,
        '2': 0,
      },
      'WORK/LIFE': {
        '0': 0,
        '1': 0,
        '2': 0,
      }
    },
    milestoneByTrack: {
      'SELF': 0,
      'TEAM': 0,
      'PEERS': 0,
      'SUPERIORS': 0,
      'BUSINESS': 0,
      'WORK/LIFE': 0
    },
    focusedTrackId: 'SELF'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location && this.props.location.pathname !== "/results") {
      this.setState(defaultState());
    }
  }

  render() {
    return (
      <main>
        <style jsx global>{`
          body {
            font-family: Helvetica;
          }
          main {
            width: 960px;
            margin: 0 auto;
          }
          a {
            color: #000;
            text-decoration: none;
          }
          .title-text {
            margin-top: 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
            font-size: 3em;
            font-family: serif;
            font-weight: bold;
          }
          .title-text:hover {
            cursor: pointer;
          }
          .name-display {
            font-size: 40px;
            height: 40px;
            width: 375px;
            line-height: 40px;
            font-weight: bold;
            border-bottom: 2px solid #ccc;
            padding-bottom: 5px;
          }
        `}</style>
        <Header
          pathname={this.props.pathname}
          menuOpen={this.state.menuOpen}
          hamburgerClick={this.handleHamburgerMenuClick.bind(this)}/>
        <Switch>
          <Route exact path = '/quiz' render={()=>
            <CompanionQuiz
                pathname='/quiz'
                tracks={tracks}
                trackIds={trackIds}
                name={this.state.name}
                nameInputted={this.state.nameInputted}
                quizSubmitted={this.state.quizSubmitted}
                handleQuizSubmitFn = {this.handleQuizSubmit.bind(this)}
                handleNameChangeFn={this.handleNameChange.bind(this)}
                handleRadioSelectionFn={this.handleRadioSelection.bind(this)}/>
          }/>
          <Route exact path = '/' render={()=>
            <CompanionQuiz
                pathname='/quiz'
                tracks={tracks}
                trackIds={trackIds}
                name={this.state.name}
                nameInputted={this.state.nameInputted}
                quizSubmitted={this.state.quizSubmitted}
                handleQuizSubmitFn = {this.handleQuizSubmit.bind(this)}
                handleNameChangeFn={this.handleNameChange.bind(this)}
                handleRadioSelectionFn={this.handleRadioSelection.bind(this)}/>
          }/>
          <Route path = '/results' render={()=><SnowFlake
              name={this.state.name}
              setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)}
              focusedTrackId={this.state.focusedTrackId}
              milestoneByTrack={this.state.milestoneByTrack}
              handleTrackMilestoneChangeFn={this.handleTrackMilestoneChange.bind(this)}
              setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)}/>

          }/>
          {/* <Route component={Error404}/> */}
        </Switch>
        <div style={{display: 'flex', paddingBottom: '20px'}}>
          <div style={{flex: 1}}>
            Made with ❤️ by <a href="" target="_blank"> Tyler</a> from the amazing open source work of <a href="https://medium.engineering" target="_blank">Medium Engineering</a>.
            Get the <a href="https://github.com/Medium/snowflake" target="_blank">original code</a>.
          </div>
        </div>
      </main>
    )
  }


  handleHamburgerMenuClick() {
    this.setState({
      menuOpen : !this.state.menuOpen
    })
  }

  // QUIZ HANDLERS

  handleNameChange(name: String) {
    this.setState({name, nameInputted: true});
  }

  calculateMilestoneTotals(trackId, milestoneMatrix) {
    const milestoneByTrack = Object.assign({}, this.state.milestoneByTrack);
    let newMilestone = 0
    for(var key in milestoneMatrix[trackId]) {
      newMilestone += milestoneMatrix[trackId][key]
    }
    milestoneByTrack[trackId] = newMilestone
    this.setState({ milestoneByTrack })
  }

  handleRadioSelection(trackId: TrackId, questionIndex: Number, milestone: Milestone) {
    const milestoneMatrix = Object.assign({}, this.state.milestoneMatrix);
    milestoneMatrix[trackId][questionIndex] = milestone
    this.setState({ milestoneMatrix});
    this.calculateMilestoneTotals(trackId, milestoneMatrix);
  }

  handleQuizSubmit() {
    this.setState({quizSubmitted: true})
    if (!this.state.nameInputted) return
    this.props.history.push('/results');
  }

  //SNOWFLAKE HANDLERS

  handleHamburgerMenuClick() {
    this.setState({
      menuOpen : !this.state.menuOpen
    })
  }

  handleTrackMilestoneChange(trackId: TrackId, milestone: Milestone) {
    const milestoneByTrack = this.state.milestoneByTrack
    milestoneByTrack[trackId] = milestone

    this.setState({ milestoneByTrack, focusedTrackId: trackId })
  }

  shiftFocusedTrack(delta: number) {
    let index = trackIds.indexOf(this.state.focusedTrackId)
    index = (index + delta + trackIds.length) % trackIds.length
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  setFocusedTrackId(trackId: TrackId) {
    let index = trackIds.indexOf(trackId)
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  shiftFocusedTrackMilestoneByDelta(delta: number) {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
    let milestone = prevMilestone + delta
    if (milestone < 0) milestone = 0
    if (milestone > 5) milestone = 5
    this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone)
  }
}

export default withRouter(App);
