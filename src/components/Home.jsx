import React from 'react'
import '../style/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <img className='img1' width={800} src='images/img1.jpg' alt='img'/>
      <h1>this is my home content</h1>
      <button className='btn'>Learn more!</button>
    </div>
  )
}

export default Home
