import { ReactNode } from 'react';
import style from './main.module.css'

interface TituloProps {
    children?: ReactNode;
    titulo: string;
}

export default function Main({children, titulo}: TituloProps ){
    return(
        <div className={style.conteiner}>
            <h1>{titulo}</h1>
            <div className={style.component}>
                {children}
            </div>     
        </div>
    )
}