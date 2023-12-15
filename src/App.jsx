import React from 'react'
import Movies from './Movies'
import MoviesGenre from './MoviesGenre'
import{Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <>
      <header>
        <h1>
        <a href="/">Moviethon</a>
        </h1>
      </header>
      <main>
        <Routes>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </main>
    </>
  )
}

export default App
