import './PetContainer.css'
import { FC } from 'react'
import { DeletePetButton } from '../../ui/deletePetButton/DeletePetButton'

interface props {
    children: string,
    age: number,
    id: string,
    customDeleteColor:string
}

export const PetContainer:FC<props> = ({children,age,id,customDeleteColor}) => {
    return(<section className='pet-box'>
        <article className='pet-container'>
            {age === 1 ? <p className='pet-age-label'>{age + ' año'}</p>
            :age > 0 ? <p className='pet-age-label'>{age + ' años'}</p>
            :null}
            <p className='pet-name-label'>{children}</p>
        </article>
        <DeletePetButton pet_id={id} customClass={customDeleteColor} />
        </section>)
}