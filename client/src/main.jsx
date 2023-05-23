import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import '../styles/globals.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Matches from './pages/match.jsx'
import ErrorPage from './pages/error.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
