import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import MovieDetails from './pages/components/MovieDetails';

function App() {
  return (
    <div>
      <Home/>
      <Routes>
        {/* <Route path='/' element={<Home></Home>}></Route> */}
        <Route path='/:title' element={<MovieDetails/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
