import './PetContainer.css'
import { FC } from 'react'

interface props {
    children: string,
    age: number
}

export const PetContainer:FC<props> = ({children,age}) => {
    return(
        <article className='pet-container'>
            {age === 1 ? <p className='pet-age-label'>{age + ' año'}</p>
            :age > 0 ? <p className='pet-age-label'>{age + ' años'}</p>
            :null}
            <p className='pet-name-label'>{children}</p>
        </article>
    )
}