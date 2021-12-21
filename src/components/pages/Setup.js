import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/style.scss'

function Setup() {
    const navigate = useNavigate()
    const [address,setAddress] = useState('')

    const goToBattle = () => {
        navigate('/choice')
    }

    return(
        <>
            <div className="choice">
                <input value={address} placeholder={"Someones Wallet Address... (right now just put anything)"} onChange={(e)=>setAddress(e.target.value)} />
            </div>
            <div className="accept" onClick={()=>goToBattle()}><button >Confront me!</button></div>
        </>
    )
}

export default Setup