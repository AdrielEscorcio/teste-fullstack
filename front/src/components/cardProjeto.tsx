import style from "./cardProjeto.module.css"
interface CardProjetoProps {
  id: number;
  nome: string;
  status: string;
  prazo: string;
  descricao: string;
}

export default function CardProjeto({id, nome, status, prazo, descricao}: CardProjetoProps){
    return(
        <div className={style.card}>
            <h2>{nome}</h2>
            <p>{status}</p>
            <p>{prazo}</p>
            <p>{descricao}</p>
        </div>
    )
}