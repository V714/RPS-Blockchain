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
                <input value={address} maxLength={0} placeholder={"Someones Wallet Addr...NO, YOU CAN ONLY WITH BOT NOW"} onChange={(e)=>setAddress(e.target.value)} />
            </div>
            <div className="accept" onClick={()=>goToBattle()}><button >Confront me, bot!</button></div>
        </>
    )
}

export default Setup