import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import delicious from '../audio/sfx/delicious.mp3'
import button_press from '../audio/sfx/button-press.mp3'
import divine from '../audio/sfx/divine.mp3'
import useSound from 'use-sound'
import { scoreContext } from '../Context/ScoreProvider'


// variants ↓
const variants = {
  initial: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 50
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 50
    }
  }
}

function ScoreBoard() {

  // context    
  const { score, count } = useContext(scoreContext)


  const [Delicious, { stop }] = useSound(delicious)
  const [Divine] = useSound(divine)


  if (score >= 20 && score <= 23) {
    Delicious();
  }

  if (score >= 50 && score <= 53) {
    Divine();
  }

  return (
    <>
      <motion.div className='flex flex-col justify-center items-center gap-y-5'
        initial={'initial'} whileHover={'hover'} whileInView={'visible'}>
        <motion.span variants={variants} className='text-3xl font-semibold font-segoui rounded border-4 p-5 border-amber-800 bg-amber-100 text-orange-800'>SCORE :
          <span className='font-bold ml-2 text-orange-600'>{score}</span>
        </motion.span>
        <motion.span variants={variants} className='text-3xl font-semibold font-segoui rounded border-4 p-5 border-amber-800 bg-amber-100 text-orange-800'>Turn :
          <span className='font-bold ml-2 text-orange-600'>{count}</span>
        </motion.span>
      </motion.div>
    </>
  )
}

export default ScoreBoard