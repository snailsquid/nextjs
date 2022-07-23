import React from 'react'
import Background from '../components/Background'
import Home from '../components/Home'
import Navbar from '../components/Navbar'

export default function maps() {
  return (
    <div>
        <Background color={'white'}>
            <Navbar/>
            <Home/>
        </Background>
    </div>
  )
}
