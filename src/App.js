import React from 'react'
import '../src/App.css'
import Home from './components/Home'
import User from './components/User'
import Login from './components/Login'

const App = () => {
  return (
    <div className='app'>
      <Home/>
      <User/>
      <Login/>
    </div>
  )
}

export default App
