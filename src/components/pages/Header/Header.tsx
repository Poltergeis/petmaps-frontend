import './Header.css';
import { ShadowLine } from '../../ui/shadow-line/ShadowLine';
import React from 'react';

interface props {
    children: string
}

export const Header: React.FC<props> = ({children}) => {
    return(
        <>
            <p className='Header-title'>{children}</p>
            <ShadowLine />
        </>
    )
}