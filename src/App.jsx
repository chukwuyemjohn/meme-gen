import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import Meme from './components/meme'


export default function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}
