import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='p-12 space-x-4 bg-amber-200'>
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


      <div className='bg-yellow-600 inline-flex items-center justify-center p-11 border-b-[1rem] border-yellow-800'>
        <div className="size-[30rem] grid grid-cols-12 grid-rows-12 border-t-[1rem] border-yellow-800 bg-white">
          {['bg-blue-200', 'bg-blue-200', 'bg-neutral-900', 'bg-neutral-900', 'bg-neutral-900', 'bg-neutral-900', 'bg-blue-200', 'bg-blue-200', 'bg-blue-200', 'bg-blue-200', 'bg-blue-200', 'bg-blue-200', 'bg-blue-200', 'bg-neutral-900', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-neutral-900', 'bg-blue-200', 'bg-blue-200', 'bg-blue-50', 'bg-blue-50', 'bg-blue-200', 'bg-blue-200', 'bg-neutral-900', 'bg-yellow-400', 'bg-yellow-400', 'bg-neutral-900', 'bg-yellow-400', 'bg-yellow-400', 'bg-neutral-900', 'bg-blue-50', 'bg-blue-50', 'bg-blue-200', 'bg-blue-200', 'bg-blue-200', 'bg-neutral-900', 'bg-yellow-400', 'bg-yellow-400', 'bg-neutral-900', 'bg-yellow-400', 'bg-yellow-400', 'bg-neutral-900', 'bg-blue-200', 'bg-blue-200', 'bg-blue-100/70', 'bg-blue-100/70', 'bg-neutral-900', 'bg-orange-500', 'bg-orange-500', 'bg-orange-500', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-neutral-900', 'bg-blue-100/70', 'bg-blue-100/70', 'bg-neutral-900', 'bg-blue-100/70', 'bg-blue-100/70', 'bg-neutral-900', 'bg-neutral-900', 'bg-neutral-900', 'bg-yellow-400', 'bg-yellow-400', 'bg-neutral-900', 'bg-neutral-900', 'bg-neutral-900', 'bg-neutral-900', 'bg-yellow-400', 'bg-neutral-900', 'bg-blue-100', 'bg-neutral-900', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-200', 'bg-yellow-200', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-neutral-900', 'bg-neutral-900', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-200', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-neutral-900', 'bg-neutral-900', 'bg-orange-400/90', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-orange-400/90', 'bg-neutral-900', 'bg-neutral-900', 'bg-orange-400/90', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-orange-400/90', 'bg-neutral-900', 'bg-blue-100', 'bg-neutral-900', 'bg-orange-400/90', 'bg-orange-400/90', 'bg-orange-400/90', 'bg-orange-400/90', 'bg-orange-400/90', 'bg-orange-400/90', 'bg-orange-400/90', 'bg-orange-400/90', 'bg-neutral-900', 'bg-blue-100', 'bg-blue-100', 'bg-blue-100', 'bg-neutral-900', 'bg-neutral-900', 'bg-neutral-900', 'bg-neutral-900', 'bg-neutral-900', 'bg-neutral-900', 'bg-neutral-900', 'bg-neutral-900', 'bg-blue-100', 'bg-blue-100'
          ].map((pixel, index) => (
            <span className={`${pixel} rounded-sm`} key={index}></span>
          ))}
        </div>
      </div>
      <p className='text-center'>Crafted with h <br /> by Frederick Moreno</p>
    </div>
  )
}

export default Home
