// @flow

import { tracks, milestones, categoryColorScale } from '../constants'
import React from 'react'
import { Link } from 'react-router-dom'


class TrackDetail extends React.Component<Props> {

  render() {
    const track = tracks[this.props.trackId]
    return (
      <div className="track">
        <style jsx>{`
          div.track {
            margin: 0 0 20px 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          h2 {
            margin: 0 0 10px 0;
          }
          p.track-description {
            margin-top: 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          ul {
            line-height: 1.5em;
          }
          .link {
            display: flex;
            justify-content: start;
            align-items: center;
            border-bottom: 2px solid #ccc;
            font-size: 1rem;
            width: 500px;
            min-height: 20px;
            padding: 5px;
            transition: .5s ease;
            margin: 0;
            color: #3f3f3f;
          }
          .no-link {
            display: flex;
            justify-content: start;
            align-items: center;
            border-bottom: 2px solid #ccc;
            font-size: 1rem;
            width: 500px;
            min-height: 20px;
            padding: 5px;
            transition: .5s ease;
            margin: 0;
            color: #3f3f3f;
          }
          .link:hover {
            color: #000;
            border-bottom: 2px solid #000;
            cursor: pointer;
          }
        `}</style>
        <h3 style={{margin: '0', padding: '15px', paddingLeft:'0', fontSize: '1.5rem'}}>{track.longDisplayName}</h3>
        <p className="track-description">{track.description}</p>
        <div style={{display: 'flex'}}>
          <div style={{flex: 1}}>
            <h3 style={{fontSize: '2rem'}}>Resources for improvement:</h3>
            <h3>Articles:</h3>
            <ul>
              {track.resources.articles.length === 0 ? <p style={{color: '#ccc'}}>articles unavailable</p> :
                track.resources.articles.map((article, i) => {
                  return (
                    <li key={i} style={{listStyleType:'none'}}>
                      {article.link ?
                        <Link to={article.link}>
                          <div className='link'>
                            <p style={{margin: '0', maxWidth: '70%'}}>{article.title}</p>
                          </div>
                        </Link>
                        :
                        <div className='no-link'>
                          <p style={{margin: '0', maxWidth: '70%'}}>{article.title}</p>
                        </div>
                      }
                    </li>
                  )
                })
              }
            </ul>
            <h3>Books:</h3>
            <ul>
              {track.resources.books.length === 0 ? <p style={{color: '#ccc'}}>books unavailable</p> :
                track.resources.books.map((book, i) => {
                  return (
                    <li key={i} style={{listStyleType:'none'}}>
                      <div className='no-link'>
                        <p style={{margin: '0', maxWidth: '80%'}}><span style={{fontWeight: 'bold'}}>{book.title}</span>  - {book.author}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
            <h3>Videos:</h3>
            <ul>
              {track.resources.videos.length === 0 ? <p style={{color: '#ccc'}}>videos unavailable</p> :
                track.resources.videos.map((book, i) => {
                  return (
                    <p></p>
                    // section dependent on future content structure
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackDetail
