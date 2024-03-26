import './AutoForm.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface props {
    fields: string[],
    route: string,
    validation: (values:string[]) => Promise<boolean>,
    forgotPassword: boolean
}

export const AutoForm:React.FC<props> = ({fields,route,validation,forgotPassword}) => {
    const navigate = useNavigate();
    const [values,setValues] = useState<string[]>([]);

    const handleInputChange = (value:string,index:number):void => {
        const updatedValues = [...values];
        updatedValues[index] = value;
        setValues(updatedValues);
    }

    const validate = async(route:string):Promise<void> => {
        if(values.every(value => value.trim() !== '')){
            if(await validation(values)){ 
                navigate(route);
            }
        }
    }

    const goToRestorePassword = ():void => {
        navigate('/forgot_password')
    }

    return(
        <section className='autoform-container'>
            {fields.map((field,index) => (
                <div className='field' key={index}>
                    <p className='field-title'>{field}</p>
                    <input type="text" className='field-input' onChange={(e) => handleInputChange(e.target.value,index)}/>
                </div>
            ))}
            {forgotPassword ? <p className='forgotPassword' onClick={goToRestorePassword}>olvidaste tu contraseña?</p> : null}
            <button className='enter-button' onClick={() => validate(route)}>Entrar</button>
        </section>
    )
}