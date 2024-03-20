import React, { createContext, useEffect, useState } from 'react'

export const musicContext = createContext()
const MusicProvider = ({children}) => {
    const [playPause,setPlayPause] = useState(false)

    useEffect(()=>{
        let currState = localStorage.getItem('musicState')
        if(currState){
          setPlayPause(currState)
        }
      },[])

  return (
    <musicContext.Provider value={{playPause,setPlayPause}}>
        {children}
    </musicContext.Provider>
  )
}

export default MusicProvider