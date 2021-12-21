import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/style.scss'

function Result() {
    const navigate = useNavigate()
    const [resultReady,setResultReady] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setResultReady(true)
        },3000)
    },[])

    const goToHome = () => {
        navigate('/')
    }

    return(
        <>
            
        {resultReady ? 
            <>
                <div className="result">
                    You Lost!
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