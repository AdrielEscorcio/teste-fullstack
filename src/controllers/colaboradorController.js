const statusCodeHttp = require('../statusCodeHttp.js')

const listarColaboradores = (req, res) => {

    res.writeHead(statusCodeHttp.ok, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'Listado colaboradores'}))
}

const listarColaboradorPorId = (req, res) => {

    res.writeHead(statusCodeHttp.ok, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'Listado colaborador por id'}))
}

const criarColaborador = (req, res) => {

    res.writeHead(statusCodeHttp.created, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'colaborador criado'}))

}

const atualizarColaborador = (req, res) => {
    
    res.writeHead(statusCodeHttp.ok, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'Colaborador Atualizado'}))
}

const deletarColaborador = (req, res) => {

    res.writeHead(statusCodeHttp.ok, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'Colaborador deletado'}))

}

const metodoNaoConhecido = (req, res) => {
        res.writeHead(statusCodeHttp.ok, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({ message: 'Metodo Não Conhecido'}))
}




module.exports = { listarColaboradores, listarColaboradorPorId, 
    criarColaborador, atualizarColaborador, deletarColaborador, metodoNaoConhecido };