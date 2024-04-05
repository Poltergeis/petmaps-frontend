import './AddPetFormInput.css'
import React,{ FC, cloneElement } from 'react'

interface props{
    children: React.ReactElement<HTMLInputElement>,
    customClass: ('big' | 'medium'),
    label: string,
    handleChange:() => void
}

const AddPetFormInput:FC<props> = ({children, customClass, label}) => {
    
    const clonedInput = cloneElement(children, {
        className: 'add-pet-input'
    });

    return(
        <section className={'pet-form-fragment ' + customClass}>
            <p className='title-label'>{label}</p>
            {clonedInput}
        </section>
    )
}

export default AddPetFormInput;