import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/style.scss'

function Result(props) {
    const navigate = useNavigate()
    const [resultReady,setResultReady] = useState(false)
    const {fight,didYouWin} = props

    useEffect(()=>{
        fight()
    },[])

    useEffect(()=>{
        if(didYouWin===null)setResultReady(false)
        else setResultReady(true)
    },[didYouWin])

    const goToHome = () => {
        setResultReady(false)
        navigate('/')
    }

    return(
        <>
            
        {resultReady ? 
            <>
                <div className="result">
                    {didYouWin?"Congratulations! You Win!":"You Lost!"}
                </div>
                <div className="accept" onClick={()=>goToHome()}><button>Play Again!</button></div>
            </>

            :

            <>
                <div className="result">
                   Wait...
                </div>

            </>
        }
            
        </>
    )
}

export default Result