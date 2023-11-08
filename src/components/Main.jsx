import React from 'react'
import GameBoard from './GameBoard'
import Settings from './Settings'
import ScoreBoard from './ScoreBoard'

function Main({score,setScore,count,setCount}) {
  return (
    <div className='App'>
        <GameBoard score={score} setScore={setScore} count={count} setCount={setCount} />
        <ScoreBoard score={score} count={count} />
        {/* <Settings playPause={playPause} setPlayPause={setPlayPause}/> */}
    </div>
  )
}

export default Main