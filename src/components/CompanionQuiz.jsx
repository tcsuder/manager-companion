// @flow

import React from 'react';
import { tracks, trackIds, } from '../constants';
import QuestionsGrid from './QuestionsGrid.jsx';

function CompanionQuiz({trackIds, tracks, name, nameInputted, handleNameChangeFn, handleRadioSelectionFn, handleQuizSubmitFn, quizSubmitted}) {
  let _name = null;

  function onNameChange() {
    handleNameChangeFn(_name.value)
  }

  return (
    <div>
      <style jsx>{`
        .name-input {
          border: none;
          display: block;
          font-size: 40px;
          height: 40px;
          width: 350px;
          line-height: 40px;
          font-weight: bold;
          padding-top: .67em;
          padding-bottom: 5px;
        }
        .name-input:hover, .name-input:focus {
          outline: 0;
        }

        div.submit-button {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          border-radius: 5px;
          font-size: 40px;
          width: 150px;
          min-height: 50px;
          border: 5px solid #000;
          padding: 10px 20px;
          transition: background-color .5s ease;
          margin: 10px auto 30px auto;
        }
        div.submit-button:hover {
          background-color: #202020;
          color: #fff;
          cursor: pointer;
        }
        div.required {
          color: #f5b431;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        div.required span {
          position: relative;
          left: -140px;
        }
      `}</style>
      <div style={{
        width: '45%',
        display: 'flex'
      }}>
        <input
          type="text"
          className="name-input h1"
          style={{borderBottom: `2px solid ${ nameInputted ? '#ccc' : '#000' }`}}
          placeholder='Your Name'
          autoFocus='autofocus'
          value={name}
          ref={(input) => {_name = input;}}
          onChange={onNameChange}
        /><div className='required'><h2 style={{margin: '0', height: '10px'}}>
          { name === '' ? <span>*</span> : <span></span>}
        </h2></div>
      </div>
      <div style={{
            padding: '50px 0',
            minHeight: '125px',
            borderBottom: '2px solid #ccc'
          }}>
        <h2>For each of the following sections, use the scale to indicate how each statement applies to your current situation as a manager. It is important to evaluate the statements honestly and without over-thinking your answers.</h2>
        {
          //   // TODO: this is super hacky right now rewrite this section and use a cursor position library to delay appreance of instructions until cursor-reengagement
          //   this.state.name ? <h2>For each of the following sections, use the scale to indicate how each statement applies to your current situation as a manager. It is important to evaluate the statements honestly and without over-thinking your answers.</h2>: ''
        }
      </div>
      {
        // TODO: add transitions and movement in quiz a la this example: jhttps://github.com/mitchgavan/react-multi-choice-quiz/tree/master/src
      }
      {
        // TODO: move question grid into own component... try to separate further if possible
      }
      {
        // TODO: get rarely sometimes and usually to take on a fixed position on scroll
      }
      <div className='quiz-content'>
        <QuestionsGrid
          trackIds={trackIds}
          tracks={tracks}
          handleRadioSelectionFn={handleRadioSelectionFn}/>
      </div>

      { quizSubmitted && !nameInputted ? <h3 style={{color: '#f5b431', margin: '0', textAlign: 'center'}}>please include your name before submitting</h3> : null }

      <div onClick={() => handleQuizSubmitFn()} >
        <div className='submit-button'>SUBMIT</div>
      </div>
    </div>
  )
}

export default CompanionQuiz;
