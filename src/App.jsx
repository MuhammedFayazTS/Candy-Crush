import { useContext, useEffect, useState } from 'react';
import useSound from 'use-sound';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import new_game from './audio/new_game.ogg'
import Main from './Pages/Main';
import BgMusic from './audio/bgMusic.mp3'
import { musicContext } from './Context/MusicProvider';
import useScreenSize from './Hooks/useScreenSize';

function App() {
  // score
  const [new_Game] = useSound(new_game)
  const { playPause, setPlayPause } = useContext(musicContext)
  const [play, { stop, isPlaying }] = useSound(BgMusic);
  // screen size
  const screenSize = useScreenSize()
  const [openWarning,setOpenWarning] = useState(true)


  useEffect(() => {
    if (playPause) {
      play()
    } else {
      stop()
    }
  }, [playPause])

  return (
    <div className="App">
      {
        screenSize.width < 768 && openWarning ?

          <section className=' w-full h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-700 via-orange-300 to-rose-800
        flex flex-col justify-center items-center gap-y-5'>
            <span className='text-3xl font-semibold text-center p-5 backdrop-blur-sm bg-gray-900/10 text-gray-100'>
              This game currently does'nt support mobile devices!!
            </span>
            <button onClick={()=>setOpenWarning(false)} className='btn p-3'>
              Continue
            </button>
          </section>
          :
          <Routes>
            <Route path='/' element={<LandingPage new_Game={new_Game} />} />
            <Route path='/game' element={<Main />} />
          </Routes>
      }
    </div>
  );
}

export default App;
