import {  motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import delicious from '../audio/sfx/delicious.mp3'
import button_press from '../audio/sfx/button-press.mp3'
import divine from '../audio/sfx/divine.mp3'
import useSound from 'use-sound'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';


function ScoreBoard({score}) {

  const [Delicious,{stop}] = useSound(delicious)
  const[Divine] = useSound(divine)


  if(score>=20 && score<=23){
    Delicious();
  }

  if(score>=50 && score<=53){
    Divine();  
  }

  return (
    <>
        <div className="score">
        <motion.div whileHover={{scale:1.01}} transition={{duration:0.3}}>
            <h1>SCORE : {score}</h1>
        </motion.div>
        </div>
    </>
  )
}

export default ScoreBoard