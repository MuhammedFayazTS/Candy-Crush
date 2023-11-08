import { useEffect, useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';
import Settings from './components/Settings';
import useSound from 'use-sound';
import BgMusic from './audio/bgMusic.mp3'
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import new_game from './audio/new_game.ogg'
import Main from './components/Main';

function App() {
  // score
  const [score,setScore] = useState(0)
  const [count,setCount] = useState(0);
  const [new_Game] = useSound(new_game)

  

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<LandingPage   new_Game={new_Game} />} />
          {/* <Route path='/game' element={<GameBoard score={score} setScore={setScore} />} /> */}
          <Route path='/game' element={<Main score={score} setScore={setScore}  count={count} setCount={setCount} />} />
      </Routes>
      {/* <GameBoard score={score} setScore={setScore} /> */}
      {/* <ScoreBoard score={score}  />
      <Settings playPause={playPause} setPlayPause={setPlayPause}/> */}
    </div>
  );
}

export default App;
