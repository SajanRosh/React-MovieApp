import axios from 'axios';
import {React, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Home() {
  let [title, setTitle] = useState('');
  //let title = 'rrr';
//   useEffect(()=>{
//     axios.get('').the
//   })
  return (
    <div>
      <div className='w-[700px] mx-auto'>
        <div className='text-center'>
            <img src="./src/assets/netflix-logo.png" className='h-[40px] mx-auto mt-6' alt="" />
            <p className='text-white text-3xl mt-4 font-bold'>Search unlimited movies, TV shows and more</p>
            <h1 className='text-neutral-500 mt-4 font-semibold text-[16px]'>Ready to watch? Enter your movie name to check if its a good choice</h1>
            <div className="flex items-center mt-7">
                <input type="text" id='movieName' onChange={() =>{
                    setTitle(document.getElementById('movieName').value);
                    console.log(document.getElementById('movieName').value);
                    
                }} className='w-[80%] px-5 py-3 rounded-l-xl focus:outline-none text-white bg-neutral-600 focus:bg-neutral-700 transition duration-[0.2s] ' placeholder='Search a movie..' />
                <Link to={`/${title}`} className='w-[20%] bg-red-800 text-white px-5 py-3 rounded-r-xl'>
                    <button id='btn'>Search Movie</button>
                </Link>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
