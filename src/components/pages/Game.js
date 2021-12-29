import React, { useEffect, useState } from 'react'
import '../style/style.scss'
import { useNavigate } from 'react-router'
import Rock from '../images/rock.svg'
import Paper from '../images/paper.svg'
import Scissors from '../images/scissors.svg'

function Game(props) {
    const navigate = useNavigate()
    const {selection, setSelection} = props

    useEffect(()=>{
        const rock = document.getElementById('rock')
        const paper = document.getElementById('paper')
        const scissors = document.getElementById('scissors')

        switch(selection){

            case 1:
                rock.classList.add('shadowSelection')
                paper.classList.remove('shadowSelection')
                scissors.classList.remove('shadowSelection')
                break;

            case 2:
                rock.classList.remove('shadowSelection')
                paper.classList.add('shadowSelection')
                scissors.classList.remove('shadowSelection')
                break;
            
            case 3:
                rock.classList.remove('shadowSelection')
                paper.classList.remove('shadowSelection')
                scissors.classList.add('shadowSelection')
                break;
                        
        }
    },[selection])

    const start = () => {
        if(selection!=0)navigate('/result')
    }

    return(
        <>
            <div className="choice">
                <button id='rock' className="choice-button" onClick={()=>setSelection(1)}><img src={Rock}/></button>
                <button id='paper' className="choice-button" onClick={()=>setSelection(2)}><img src={Paper}/></button>
                <button id='scissors' className="choice-button" onClick={()=>setSelection(3)}><img src={Scissors}/></button>
            </div>
            <div className="accept"><button className={selection==0 ? 'disabled' : ''} onClick={()=>start()}>That's My Choice!</button></div>
        </>
    )
}

export default Game