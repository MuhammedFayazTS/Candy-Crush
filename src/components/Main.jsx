import React from 'react'
import GameBoard from './GameBoard'
import Settings from './Settings'
import ScoreBoard from './ScoreBoard'

function Main({score,setScore,playPause,setPlayPause}) {
  return (
    <div className='App'>
        <GameBoard score={score} setScore={setScore}/>
        <ScoreBoard score={score} />
        {/* <Settings playPause={playPause} setPlayPause={setPlayPause}/> */}
    </div>
  )
}

export default Main