import './AddPets.css'
import { Header } from '../../components/pages/Header/Header'
import { useState } from 'react'
import addPet from '../../services/addPets'

export default function AddPets(){
    return(
        <main className='add-pets-container'>
            <Header>MyPets</Header>
            <p className='add-pets-title'>Agregar Mascota</p>
        </main>
    )
}