function base (tabela) {

    const acoes = {
        inserir: 'inserir',
        listar: 'listar',
        listarPorID: 'listarPorID',
        listarPorIDs: 'listarPorIDs',
        atualizar: 'atualizar',
        deletar: 'deletar'
    }

    function definirValoresChaves(acao,dados) {
        const valores = Object.values(dados).map(v => v)
        const chaves = Object.keys(dados).join(', ')
        if(acao === 'inserir'){
            const reservado = valores.map(() => '?').join(', ')
            return {valores, chaves, reservado};
        }
            
        return {valores, chaves};
    }
    
    const crud = {
            inserir: (dados) => {
                const {valores, chaves, reservado } = definirValoresChaves(acoes.inserir,dados)
                const sql = `INSERT INTO ${tabela} (${chaves}) VALUES (${reservado})`
                console.log(sql, [...valores]);
            },
            listar: () => {
                const sql = `SELECT * FROM ${tabela}`;
                console.log(sql);
                return sql;
            },
            listarPorID: (id) => {
                const sql = `SELECT * FROM ${tabela} where id = ?`;
                console.log(sql,[id]);
                return sql;
            },
            atualizar: (id, dados) => {
                const {valores, chaves} = definirValoresChaves(acoes.atualizar,dados)
                const sql = `UPDATE ${tabela} SET ${chaves}  WHERE id = ?`
                console.log(sql, [...valores, id]);
                return sql;
            },
            deletar: (id) => {
                const sql = `DELETE FROM ${tabela} WHERE id = ?`
                console.log(sql, [id]);
                return sql;
            },
            listarPorIDs: (recurso, id, extra, idExtra) => {
                const sql = `SELECT 1 FROM ${tabela} WHERE ${recurso}_id = ? AND ${extra}_id = ?;`;
                console.log(sql, [id, idExtra]);
                return sql;
            },
            listarExtraDeRecurso: (id, extra, recurso) => {
                const sql = `SELECT * FROM ${extra} AS c INNER JOIN ${tabela} AS pc ON c.id = pc.${extra}_id WHERE pc.${recurso}_id = ?;`;
                console.log(sql, [id]);
                return sql;
            },
            deletarRecursoExtra: (recurso, id, extra, idExtra) => {
                const sql = `DELETE FROM ${tabela} WHERE ${recurso}_id = ? AND ${extra}_id = ?;`;
                console.log(sql, [id, idExtra])
                return sql;

            }, 
            criarRecursoExtra: (recurso, id, extra, dados) => {
                const {valores} = definirValoresChaves(acoes.inserir, dados)
                const sql = `INSERT INTO ${tabela} (${recurso}_id, ${extra}_id) VALUES (?, ?);`
                console.log(sql, [id, ...valores]) 
                return sql;
            }
        }

    return crud;
}

module.exports = base;