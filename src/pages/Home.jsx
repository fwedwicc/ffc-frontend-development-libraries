import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='p-12 space-x-4'>
      <h1>Links</h1>
      <Link to='/markdown-previewer'>
        Markdown Previewer
      </Link>
      <Link to='/drum-machine'>
        Drum Machine
      </Link>
      <Link to='/25-5-clock'>
        25 + 5 Clock
      </Link>
      <Link to='/calculator'>
        Calculator
      </Link>
    </div>
  )
}

export default Home
