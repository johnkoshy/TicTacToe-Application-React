import React from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'
import { useState } from 'react'
import { useRef } from 'react'

let data = ["", "", "", "", "", "", "", "", ""]

const TicTacToe = () => {

    let [count, setCount] = useState(0)
    let [lock, setLock] = useState(false)
    let resultRef = useRef(null)

    const toggle = (e, num) => {
        if (lock) {
            return 0
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross_icon}'/>`
            data[num] = 'x'
            setCount(++count)
        }
        else {
            e.target.innerHTML = `<img src='${circle_icon}'/>`
            data[num] = 'o'
            setCount(++count)
        }
        checkWin()

    }

    const checkWin = () => {
        if (data[0]===data[1] && data[1]===data[2] && data[2]!=="") {
            won(data[2])
        }
        else if (data[3]===data[4] && data[4]===data[5] && data[5]!=="") {
            won(data[5])
        }
        else if (data[6]===data[7] && data[7]===data[8] && data[8]!=="") {
            won(data[8])
        }
        else if (data[0]===data[3] && data[3]===data[6] && data[6]!=="") {
            won(data[6])
        }
        else if (data[1]===data[4] && data[4]===data[7] && data[7]!=="") {
            won(data[7])
        }
        else if (data[2]===data[5] && data[5]===data[8] && data[8]!=="") {
            won(data[8])
        }
        else if (data[0]===data[4] && data[4]===data[8] && data[8]!=="") {
            won(data[8])
        }
        else if (data[2]===data[4] && data[4]===data[6] && data[6]!=="") {
            won(data[6])
        }
        else if (count===9) {
            resultRef.current.innerHTML = `It's a Draw! 😢`
            setLock(true)
        }
    }

    const won = (winner) => {
        setLock(true)
        if (winner==='x') {
            resultRef.current.innerHTML = `Player &nbsp; <img src=${cross_icon} style="width: 30px; height: 30px;"> &nbsp; Won 🏆`
        }
        else {
            resultRef.current.innerHTML = `Player &nbsp; <img src=${circle_icon} style="width: 30px; height: 30px;"> &nbsp; Won 🏆`
        }
    }

    const reset = () => {
        data = ["", "", "", "", "", "", "", "", ""]
        setCount(0)
        setLock(false)
        resultRef.current.innerHTML = ``
        document.querySelectorAll('.boxes').forEach(box => box.innerHTML = '')
    }

    return (
        <div className='container'>
            <h3 className='title'>Tic Tac Toe Game</h3>
            <h6 className='result' ref={resultRef}> </h6>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e) => { toggle(e, 0) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 1) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 2) }}></div>
                </div>
                <div>
                    <div className="boxes" onClick={(e) => { toggle(e, 3) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 4) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 5) }}></div>
                </div>
                <div>
                    <div className="boxes" onClick={(e) => { toggle(e, 6) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 7) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 8) }}></div>
                </div>

            </div>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    )
}

export default TicTacToe