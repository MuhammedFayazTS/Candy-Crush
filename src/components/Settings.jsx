import { motion } from 'framer-motion'
import React, { useState } from 'react'
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import { IconButton } from '@mui/material';
import button_down from '../audio/sfx/button-down.mp3'
import useSound from 'use-sound';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

function Settings({playPause,setPlayPause}) {
  const [clickSound] = useSound(button_down);
  return (
    <>
        <motion.div  className='settings' onClick={()=>{setPlayPause(!playPause) 
           clickSound() }} >
            <motion.div whileHover={{scale:1.2  }}>
          <IconButton>
              {
                playPause?
                <VolumeUpIcon/>
                :<VolumeOffIcon/>
              }
          </IconButton>
              </motion.div>
        </motion.div>
    </>
  )
}


export default Settings