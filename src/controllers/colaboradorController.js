const listarColaboradores = (req, res) => {

    res.writeHead(200, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'Listado colaboradores'}))
}

const listarColaboradorPorId = (req, res) => {

    res.writeHead(200, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'Listado colaborador por id'}))
}

const criarColaborador = (req, res) => {

    res.writeHead(201, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'colaborador criado'}))

}

const atualizarColaborador = (req, res) => {
    
    res.writeHead(200, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'Colaborador Atualizado'}))
}

const deletarColaborador = (req, res) => {

    res.writeHead(200, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'Colaborador deletado'}))

}




module.exports = { listarColaboradores, listarColaboradorPorId, 
    criarColaborador, atualizarColaborador, deletarColaborador };