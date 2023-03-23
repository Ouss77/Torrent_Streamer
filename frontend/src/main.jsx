import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import { FavoriteMovies } from './Components/FavoriteMovies'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<App/>}></Route>
  <Route path="/favori" element={<FavoriteMovies/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
