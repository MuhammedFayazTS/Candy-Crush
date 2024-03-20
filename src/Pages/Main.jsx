import React, { useContext } from 'react'
import GameBoard from '../components/GameBoard'
import ScoreBoard from '../components/ScoreBoard'
import { musicContext } from '../Context/MusicProvider'
import { RiVolumeMuteFill, RiVolumeUpFill } from '@remixicon/react'

function Main() {
  const { playPause, setPlayPause } = useContext(musicContext)
  return (
    <>
      <section className={`w-full min-h-screen flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-y-0 md:gap-x-16 backdrop-blur bg-cover bg-[url(./images/bg2.jpg)]`}>
        <GameBoard />
        <ScoreBoard />

        {/* volume button */}
        <button onClick={() => setPlayPause(prev => !prev)}
          className='iconBtn fixed right-6 bottom-6 '
        >
          {
            playPause ?
              <RiVolumeUpFill /> :
              <RiVolumeMuteFill />
          }
        </button>
      </section>
    </>
  )
}

export default Main