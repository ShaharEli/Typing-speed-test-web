import React, { useState } from 'react'
import "./Test.css"
import Button from "@material-ui/core/Button"
import Game from '../game/Game'
function Test() {
    const [gameCounter, setGameCounter] = useState(0)
    const [gameStart, setGameStart] = useState(false)
    const [startBtnDisplay, setStartBtnDisplay] = useState("block")
    const [history,setHistory] = useState([])
    const start = ()=>{
        setGameCounter(prev=>prev+1)
        setGameStart(true)
        setStartBtnDisplay("none")
    }
    const end = (data) => {
        setGameStart(false)
        setStartBtnDisplay("block")
        setHistory(prev=>prev.concat([data]))
    }
    return (
        <>
        <div id="gameCounter">game number: {gameCounter}</div>
        <div id="test">
            <Button onClick={start} style={{height:40, display:startBtnDisplay}} variant="contained" color="primary">
                Start Test
            </Button>
            {
                gameStart&&<Game end={end} />
            }
        </div>
        {
            history.length>0&&<div className="scores">
                {
                    history.map((item,index)=>{
                   return   <div className="records" key={index}>
                       <div>
                           grade:{item.grade}/{item.word.length} ({Math.round(item.grade/item.word.length)})
                        </div>
                        <div>
                        word: {item.word}
                        </div>
                        <div>
                         time: {item.time} seconds
                         </div>
                   </div>
                    })
                }
        </div>
}
        </>
    )
}

export default Test
