import React, { useEffect, useState } from 'react'
import './GameBoard.css';
import BlueCandy from '../images/blue-candy.png'
import OrangeCandy from '../images/orange-candy.png'
import GreenCandy from '../images/green-candy.png'
import PurpleCandy from '../images/purple-candy.png'
import RedCandy from '../images/red-candy.png'
import YellowCandy from '../images/yellow-candy.png'
import blank from '../images/blank.png'
import { easeInOut, easeOut, motion } from 'framer-motion';
import useSound from 'use-sound';
import line_blast from '../audio/line_blast.ogg'
import delicious from '../audio/sfx/delicious.mp3'
import button_press from '../audio/sfx/button-press.mp3'
import button_release from '../audio/sfx/button-release.mp3'
import bubble from '../audio/sfx/bubble.wav'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const width = 8;
const candys = [
    BlueCandy,
    PurpleCandy,
    OrangeCandy,
    RedCandy,
    YellowCandy,
    GreenCandy
]


function GameBoard({score,setScore}) {
    
    const [colorArrangement,setColorArrangement] = useState([])
    const [candyBeingDragged,setCandyBeingDragged] = useState(null)
    const [candyBeingReplaced,setCandyBeingReplaced] = useState(null)
   //Sound effects
    const [line_Blast] = useSound(line_blast)
    const [buttton_Press]=useSound(button_press)
    const[Bubble] = useSound(bubble,{volume:0.15})
    
    // navigate
    const Navigate = useNavigate()
    
    // column of 4 checking
    const checkForColumnOfFour = ()=>{
        for(let i=0; i<=39; i++){
            const columnOfFour = [i,i+width,i+width*2,i+width*3]
            const decidedCandy = colorArrangement[i]
            const isBlank = colorArrangement[i] === blank
    
            if(columnOfFour.every(square=> colorArrangement[square] === decidedCandy && !isBlank)) {
                columnOfFour.forEach(square=> colorArrangement[square]=blank)
                setScore(score+4)
                // playSound(sound)
                return true
            }
        }
        }
        
        // row of 4 checking
        const checkForRowOfFour= ()=>{
            for(let i=0; i<64 ; i++){
                const rowOfFour = [i,i+1,i+2,i+3]
                const notValid = [5,6,7,13,14,15,21,22,23,29,30,31,37,38,39,45,46,53,54,55,62,63,64]
                const decidedCandy = colorArrangement[i]
                const isBlank = colorArrangement[i] === blank
        
                if(notValid.includes(i)) continue
                if(rowOfFour.every(square=> colorArrangement[square] === decidedCandy && !isBlank)){
                rowOfFour.forEach(square=> colorArrangement[square]=blank)
                setScore(score+4)
                return true
            }
        }
        }
    // column of 3 checking
    const checkForColumnOfThree = ()=>{
        for(let i=0; i<=47; i++){
            const columnOfThree = [i,i+width,i+width*2]
            const decidedCandy = colorArrangement[i]
            const isBlank = colorArrangement[i] === blank
            
            if(columnOfThree.every(square=> colorArrangement[square] === decidedCandy && !isBlank)){
            columnOfThree.forEach(square=> colorArrangement[square]=blank)
            setScore(score+3)
            return true
        }
    }
}

    // row of 3 checking
    const checkForRowOfThree= ()=>{
        for(let i=0; i<64 ; i++){
            const notValid = [6,7,14,15,22,23,30,31,38,39,46,54,55,63,64]
            const rowOfThree = [i,i+1,i+2]
            const decidedCandy = colorArrangement[i]
            const isBlank = colorArrangement[i] === blank

            if(notValid.includes(i)) continue
            if(rowOfThree.every(square=> colorArrangement[square] === decidedCandy && !isBlank)){
            rowOfThree.forEach(square=> colorArrangement[square]=blank)
            setScore(score+3)
            return true
        }
    }
}

    // move empty squares
    const moveIntoSquareBelow = ()=>{
        for(let i=0;i<55;i++){
            const firstRow = [0,1,2,3,4,5,6,7]
            const isFirstRow = firstRow.includes(i);

            if(isFirstRow && colorArrangement[i] === blank){
                let randomNumber = Math.floor(Math.random() * candys.length)
                colorArrangement[i] = candys[randomNumber]
            }

            if((colorArrangement[i + width]) === blank){
                colorArrangement[i + width] = colorArrangement[i]
                colorArrangement[i]= blank;
            }
        }
    }
    // drag functions
    const dragStart=(e)=>{
        setCandyBeingDragged(e.target);
    }
    const dragDrop=(e)=>{
        setCandyBeingReplaced(e.target);
    }
    const dragEnd=(e)=>{
        e.preventDefault();
        const candyBeingDraggedID = parseInt(candyBeingDragged.getAttribute('data-id'))
        const candyBeingReplacedID = parseInt(candyBeingReplaced.getAttribute('data-id'))
        
        
        
        const validMoves = [
            candyBeingDraggedID -1,
            candyBeingDraggedID -width,
            candyBeingDraggedID +1,
            candyBeingDraggedID +width
        ]
        const validmOve = validMoves.includes(candyBeingReplacedID)
       
        if(validmOve){
            colorArrangement[candyBeingReplacedID] = candyBeingDragged.getAttribute('src');
            colorArrangement[candyBeingDraggedID] = candyBeingReplaced.getAttribute('src');
        }
        
           const isAColumnOfThree = checkForColumnOfThree()
           const isARowOfThree = checkForRowOfThree()
           const isAColumnOfFour = checkForColumnOfFour()
           const isARowOfFour = checkForRowOfFour()

           if(candyBeingReplacedID && validmOve && 
            (isAColumnOfFour ||isARowOfFour || isAColumnOfThree || isARowOfThree ))
            {
                setCandyBeingDragged(null)
                setCandyBeingReplaced(null)
                // Delicious()
                line_Blast();
            }else{
                colorArrangement[candyBeingReplacedID] = candyBeingReplaced.getAttribute('src')
                colorArrangement[candyBeingDraggedID] = candyBeingDragged.getAttribute('src')
                setColorArrangement([...colorArrangement])
            }
    }
    // create game board
    const createBoard = () =>{
        const randomColorArrangement = [];
        for(let i=0 ; i<width*width ; i++){
            const randomColor = candys[Math.floor(Math.random() * candys.length)]
            randomColorArrangement.push(randomColor);
        }
       setColorArrangement(randomColorArrangement);
    }


    useEffect(()=>{
        createBoard()
    },[])


    useEffect(()=>{
        const timer = setInterval(()=>{
            checkForColumnOfFour()
            checkForRowOfFour();
            checkForColumnOfThree();
            checkForRowOfThree()
            moveIntoSquareBelow();
            setColorArrangement([...colorArrangement])
        },100)
        return ()=>clearInterval(timer);
    },[checkForColumnOfFour,checkForRowOfFour,checkForColumnOfThree, checkForRowOfThree,moveIntoSquareBelow, colorArrangement])

  return (
    <>
            <IconButton onClick={()=>Navigate('/')}>
            <KeyboardBackspaceIcon  className='backIcon'/>
            </IconButton>

        <div className="game-board">
            {colorArrangement.map((candy,index)=>(
                <motion.img whileInView={{scale:1}} whileHover={{scale:.85}} initial={{scale:1.6}} whileTap={{scale:1.3,border:'none',boxShadow:'none'}} transition={{easings:easeInOut}}
                loading='lazy'
                src={candy}
                key={index}
                alt={candy}
                data-id={index}
                draggable={true}
                onDragStart={dragStart}
                onDragOver={(e)=>e.preventDefault()}
                onDragEnter={(e)=>e.preventDefault()}
                onDragLeave={(e)=>e.preventDefault()}
                onDrop={dragDrop}
                onDragEnd={dragEnd}
                onMouseOver={()=>Bubble()}
                onMouseDownCapture={()=>buttton_Press()}
                />
            ))}
        </div>
    </>
  )
}

export default GameBoard