import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CoursesContext from './context/CoursesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoursesContext>
      <App />
    </CoursesContext>
  </React.StrictMode>,
)
