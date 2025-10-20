import Main from "@/components/main";
import style from '@/app/projetos/[id]/page.module.css'


type pageParams = {
    params: {
        id: string;
    }
}

type Projeto = {
    id: number;
    nome: string;
    status: string;
    prazo: string;
    descricao: string;
}

type Colaboradores = {
    id: number;
    nome: string;
    idade: string;
    prazo: string;
    descricao: string;
}

export default async function projeto({params}: pageParams){

    const responseProjeto = await fetch(`http://localhost:3001/projeto/${params.id}`)
    const data = await (responseProjeto.json()) as Projeto;
    const responseColaborador = await fetch(`http://localhost:3001/projeto/${params.id}/colaborador`)
    const dataColaborador = await (responseColaborador.json()) as Colaboradores;

    return(
        
        <Main titulo={data.nome}>
            <div className={style.conteiner}>
                <p>Status: {data.status}</p>
                <p>Prazo: {data.prazo}</p>
                <p>Descrição: {data.descricao}</p>
            </div>
        </Main>
    )
}