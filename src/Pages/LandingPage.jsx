import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar';
import { musicContext } from '../Context/MusicProvider';
import { RiVolumeMuteFill, RiVolumeUpFill } from '@remixicon/react';


function LandingPage({ new_Game }) {
  const Navigate = useNavigate()
  const { playPause, setPlayPause } = useContext(musicContext)

  return (
    <>
      <section className='w-full h-screen flex flex-col justify-center items-center backdrop-blur-sm bg-imgLanding'>
        {/* header */}
        <header className='w-full h-fit fixed top-0 left-0'>
          <NavBar />
        </header>
        {/* start box */}
        <div className='w-5/6 md:w-1/3 h-56 md:h-2/5 py-6 flex flex-col justify-between items-center '>
          {/* greeting heading */}
          <h3 className='text-stroke text-4xl md:text-7xl font-bold font-pacifico text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500' >
            Welcome To Candy Crush
          </h3>
          {/* start button */}
          <button
            className='btn font-pacifico px-8 py-2 text-xl text-stroke text-gray-200'
            onClick={() => {
              Navigate('/game')
              new_Game()
            }}>
            Start a new Game
          </button>
        </div>

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

export default LandingPage