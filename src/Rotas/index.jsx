import React from 'react'
import '../App.css'
import Autenticados from './authrotas'
import NaoAutenticados from './naoauth'

export default function Rotas(){
    const autenticado = false
    return(
        autenticado === true ? <Autenticados /> : <NaoAutenticados />
    )
}