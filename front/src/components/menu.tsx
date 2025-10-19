import Link from "next/link";
import style from "./menu.module.css"
import { LuLayoutDashboard, LuUsers, LuFolder } from 'react-icons/lu';

export default function Menu(){
    return (
        <ul className={`${style.component}`}>
            <Link href={"/dashboard"}><li><LuLayoutDashboard /> Dashboard</li></Link>
            <Link href={"/projetos"}><li><LuUsers /> Projetos</li></Link>
            <Link href={"/colaboradores"}><li><LuFolder />Colaboradores</li></Link>
        </ul>
    )
}

