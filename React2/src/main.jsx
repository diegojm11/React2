import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initFirestoreApp } from './firestore/config'


initFirestoreApp()
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
