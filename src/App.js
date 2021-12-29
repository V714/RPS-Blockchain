import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './components/style/style.scss'
import Game from './components/pages/Game.js'
import Setup from './components/pages/Setup.js'
import Result from './components/pages/Result.js'
import Web3 from 'web3';
import myContract from './contract.json'


function App() {
  const [selection, setSelection] = React.useState(null)
  const [didYouWin,setDidYouWin] = React.useState(null)


const fight = async() => {
  console.log("started web3")

    let web3 = new Web3("https://data-seed-prebsc-1-s2.binance.org:8545/");
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    web3.eth.defaultAccount = accounts[0]
    let contract = await new web3.eth.Contract(myContract,'0xc2f63213D9Cf6841db8b64B6DD9AF85445F84d3d')
  
  
    await contract.methods.play(selection).call().then((res) => {setDidYouWin(res)})
    /*
    console.log(myContract) 
    'https://data-seed-prebsc-1-s2.binance.org:8545/'
    0xd6310026e260Dc4162ed58963fc6ba09564b6676
    */

/* 
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"))
    console.log(web3)
    console.log(contract)
    const result = await contract.play('1')
    console.log(result) */
  } 

  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Setup/>}/>
          <Route path="/choice" element={<Game selection={selection} setSelection={setSelection}/>}/>
          <Route path="/result" element={<Result fight={fight} didYouWin={didYouWin}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
