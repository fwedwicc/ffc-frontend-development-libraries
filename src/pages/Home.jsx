import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='p-12'>
      <h1>Links</h1>
      <Link to='/markdown-previewer'>
        Markdown Previewer
      </Link>
      <Link to='/drum-machine'>
        Drum Machine
      </Link>
    </div>
  )
}

export default Home
