import CardProjeto from "@/components/cardProjeto";
import style from './page.module.css'
import Link from "next/link";
import Main from "@/components/main";

type Projeto = {
    id: number;
	nome: string;
	prazo: string;
	status: string;
	descricao: string;
};

export default async function Projetos() {
  const response = await fetch('http://localhost:3001/projeto/');
    const data = (await response.json()) as Projeto [];
    return(
        
        <Main titulo="Projetos">
            {data.map( (data) => (
                <Link href={`/projetos/${data.id}`}>
                    <CardProjeto key={data.id} id={data.id} nome={data.nome} status={data.status}
                    prazo={data.prazo} descricao={data.descricao} />
                </Link>
            ))}
        </Main>
    )
}