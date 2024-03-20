import { motion } from 'framer-motion'
import React, { useState } from 'react'
import button_down from '../audio/sfx/button-down.mp3'
import useSound from 'use-sound';

function Settings({playPause,setPlayPause}) {
  const [clickSound] = useSound(button_down);
  return (
    <>
        <motion.div  className='settings' onClick={()=>{setPlayPause(!playPause) 
           clickSound() }} >
            <motion.div whileHover={{scale:1.2  }}>
          {/* <IconButton>
              {
                playPause?
                <VolumeUpIcon/>
                :<VolumeOffIcon/>
              }
          </IconButton> */}
              </motion.div>
        </motion.div>
    </>
  )
}


export default Settings