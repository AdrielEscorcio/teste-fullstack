const statusCodeHttp = require('../statusCodeHttp.js')

const listarProjetos = (req, res) => {

    res.writeHead(statusCodeHttp.ok, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'Listado Projetos'}))
}

const listarProjetoPorId = (req, res) => {

    res.writeHead(statusCodeHttp.ok, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'Listado Projeto por id'}))
}

const criarProjeto = (req, res) => {

    res.writeHead(statusCodeHttp.created, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'Projeto criado'}))

}

const atualizarProjeto = (req, res) => {
    
    res.writeHead(statusCodeHttp.ok, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'Projeto Atualizado'}))
}

const deletarProjeto = (req, res) => {

    res.writeHead(statusCodeHttp.ok, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'Projeto deletado'}))

}

const metodoNaoConhecido = (req, res) => {
        res.writeHead(statusCodeHttp.ok, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({ message: 'Metodo Não Conhecido'}))
}




module.exports = { listarProjetos,listarProjetoPorId,criarProjeto, 
    atualizarProjeto, deletarProjeto, metodoNaoConhecido };