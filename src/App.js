import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Workout from './pages/Workout'
import { useState } from 'react'
import { MainContext } from './context/MainContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [diffculty, setDifficulty] = useState('')
  return (
    <BrowserRouter>
      <MainContext.Provider value={{ search, setSearch, loading, setLoading, data, setData, err, setErr, diffculty, setDifficulty }}>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/workout' element={<Workout />} />
        </Routes>
      </MainContext.Provider>
    </BrowserRouter>
  )
}
