import axios from 'axios';
import {React, useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'

function MovieDetails() {
    let {title} = useParams();    
    let [movieDetails, setMovieDetails] = useState({})
    useEffect(() => {
      // setMovieDetails(null)
        axios.get(`https://www.omdbapi.com/?apikey=61e576a4&t=${title}`).then((movie) =>{
            setMovieDetails(movie.data);
            //console.log(movie.data);
            console.log(movie)
        })
    },[title])
    
  return (
    <div>
      
        {  
          movieDetails === Object.length < 0 ? "" :
          movieDetails.Error === 'Movie not found!' ? <div className='w-[700px] mx-auto flex mt-28 text-white'>
            <div className='text-center flex justify-center items-center w-full mx-auto text-2xl font-bold'>Movie Not Found
              </div>
              </div> :
          <div className='w-[700px] mx-auto flex mt-16 text-white'>
              <div className='w-[60%]'>
          <h1 className='font-bold text-xl'>{movieDetails.Title}</h1>
          <h1 className='mt-3'>Genre : {movieDetails.Genre}</h1>
          <p className='mt-2'>{movieDetails.Plot}</p>
          <p className='mt-2'>Actors : {movieDetails.Actors}</p>
          <p className='mt-1'>Directors : {movieDetails.Director}</p>
          <p className='mt-1'>Awards : {movieDetails.Awards}</p>
          <p className='mt-1'>Box office collection : {movieDetails.BoxOffice}</p>
          <p className='mt-1'>Languages : {movieDetails.Language}</p>
          <p className='mt-1'>IMDB Ratings : {movieDetails.imdbRating}</p>
        </div>
        <div className='w-[40%] ml-7'>
          <div className="relative">
            <img src={movieDetails.Poster} alt="" className='w-full h-[330px] object-cover rounded-xl' />
            {
              movieDetails.imdbRating >= 7 ? <p className='absolute top-3 left-3 bg-green-100 text-green-700 font-semibold rounded-xl px-2 py-1'>Worth Watching</p> : 
              movieDetails.imdbRating < 7 && movieDetails.imdbRating > 6 ? <p className='absolute top-3 left-3 bg-purple-100 text-purple-700 font-semibold rounded-xl px-2 py-1'> Can Watch</p>  : <p className='absolute top-3 left-3 bg-red-100 text-red-700 font-semibold rounded-xl px-2 py-1'>Time Waste</p> 
            }
            
            
          </div>
          
        </div>
          </div>
        }
      </div>
  )
}

export default MovieDetails
