import React from 'react'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MoviesGenre from './pages/MoviesGenre'
import{Routes,Route} from 'react-router-dom'
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/genre" element={<MoviesGenre />} />
    </Routes>
    <Footer />
  </div>
  )
}

export default App
