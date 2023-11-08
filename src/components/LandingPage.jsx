import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import useSound from 'use-sound'
import { easeInOut, easeOut, motion } from 'framer-motion';


function LandingPage({new_Game,playPause,bgMUSIC}) {
  // const [bgMUSIC,{sound}] = useSound(bgMusic,{volume:playPause?0.25:1})
    const Navigate = useNavigate()
  

  return (
    <>
       <div className='landing'>
         <div>
          <motion.h3 whileHover={{scale:1.3}}>Welcome!!</motion.h3>
          {/* <img src={logo} alt="" /> */}
          {/* // bgMUSIC() */}
            <Button variant='contained' sx={{bgcolor:'#8B4513',":hover":{bgcolor:'#A0522D'}}} onClick={()=>{Navigate('/game')
            new_Game()
            }}>
            New Game
            </Button>
         </div>
       </div>
    </>
  )
}

export default LandingPage