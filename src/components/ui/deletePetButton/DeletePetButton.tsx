import './DeletePetButton.css'
import { FC } from 'react'
import IonIcon from '@reacticons/ionicons'

interface props {
    pet_id: string,
    customClass: string
}

export const DeletePetButton:FC<props> = ({ pet_id,customClass }) => {
    return(
        <button className={"trash-can-container"}>
            <IonIcon name="trash-outline" className={'trash-can ' + customClass}/>
        </button>
    )
}