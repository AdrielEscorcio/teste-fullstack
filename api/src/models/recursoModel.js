const {run, all, get} = require('../../db/dbCrud')

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

        if(acao === 'atualizar'){
            const chavesAtualizar = Object.keys(dados).join(' = ?, ').concat(' = ?')
            return {valores, chavesAtualizar}
        }
        
        if(acao === 'inserir'){
            const reservado = valores.map(() => '?').join(', ')
            return {valores, chaves, reservado};
        }
            
        return {valores, chaves};
    }
    
    const crud = {
            inserir: async (dados) => {
                const {valores, chaves, reservado } = definirValoresChaves(acoes.inserir,dados)
                const sql = `INSERT INTO ${tabela} (${chaves}) VALUES (${reservado})`
                await run(sql, [...valores])
                return dados
            },
            listar: async () => {
                const sql = `SELECT * FROM ${tabela}`;
                const res = await all(sql)
                return res; 
            },
            listarPorID: async (id) => {
                const sql = `SELECT * FROM ${tabela} where id = ?`;
                const res = await get(sql,[id]);
                return res;
            },
            atualizar: async (id, dados) => {
                const {valores, chavesAtualizar} = definirValoresChaves(acoes.atualizar,dados)
                const sql = `UPDATE ${tabela} SET ${chavesAtualizar}  WHERE id = ?`
                await run(sql, [...valores, id]);
            },
            deletar: async (id) => {
                const sql = `DELETE FROM ${tabela} WHERE id = ?`
                return await run(sql, [id]);
            },
            listarPorIDs: async (recurso, id, extra, idExtra) => {
                const sql = `SELECT 1 FROM ${tabela} WHERE ${recurso}_id = ? AND ${extra}_id = ?;`;
                const res = await get(sql, [id, idExtra]);
                res.teste = "2"
                console.log(res)
                return res;
            },
            listarExtraDeRecurso: async (id, extra, recurso) => {
                const sql = `SELECT * FROM ${extra} AS c INNER JOIN ${tabela} AS pc ON c.id = pc.${extra}_id WHERE pc.${recurso}_id = ?;`;
                const res = await all(sql, [id]);
                return res;
            },
            deletarRecursoExtra: async (recurso, id, extra, idExtra) => {
                const sql = `DELETE FROM ${tabela} WHERE ${recurso}_id = ? AND ${extra}_id = ?;`;
                await run(sql, [id, idExtra])
            }, 
            criarRecursoExtra: async (recurso, id, extra, dados) => {
                const {valores} = definirValoresChaves(acoes.inserir, dados)
                const sql = `INSERT INTO ${tabela} (${recurso}_id, ${extra}_id) VALUES (?, ?);`
                await run(sql, [id, ...valores])
            }
        }

    return crud;
}

module.exports = base;