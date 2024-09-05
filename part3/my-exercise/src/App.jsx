import { useState } from 'react'


import './App.css'
import HobbyIntroduction from './components/Introduction'
import MyProjects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>My Hobby: Cross Stitching</h1>
        <HobbyIntroduction/>
        <MyProjects />
      </div>
    </>
  )
}

export default App
