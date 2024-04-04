import './AddPetButton.css'
import IonIcon from '@reacticons/ionicons'
import { useNavigate } from 'react-router-dom'

export default function AddPetButton(){

    const navigate = useNavigate();

    const redirect = ():void => {
        navigate('/addPets');
    }

    return(
        <button className='add-pet-button' onClick={redirect}>
            <IonIcon name="add-circle-outline" size='large' className='add-pet-icon'/>
        </button>
    )
}