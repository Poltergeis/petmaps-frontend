import './AutoForm.css';
import React from 'react';

interface props {
    fields: Array<string>,
    route: string,
    validation: (values:Array<string>) => boolean;
}

export const AutoForm:React.FC<props> = ({fields,route,validation}) => {
    return(
        <main>

        </main>
    )
}