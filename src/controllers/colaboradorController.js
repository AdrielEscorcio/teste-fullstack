const listarColaboradores = (req, res) => {

    res.writeHead(200, {'Content-Type': 'aplication/json'});
    res.end(JSON.stringify({ message: 'Listado colaboradores'}))
}




module.exports = listarColaboradores;