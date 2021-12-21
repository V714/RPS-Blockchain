import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './components/style/style.scss'
import Game from './components/pages/Game.js'
import Setup from './components/pages/Setup.js'
import Result from './components/pages/Result.js'

function App() {


  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Setup/>}/>
          <Route path="/choice" element={<Game/>}/>
          <Route path="/result" element={<Result/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
