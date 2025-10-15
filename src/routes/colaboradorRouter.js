const listarColaboradores = require("../controllers/colaboradorController");

const methods = {
    GET: {
        '/': listarColaboradores
    },
    DEFAULT: (req, res) => {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({ message: 'Metodo Não Conhecido'}))
    }
}

const route = (req, res) => {
    const {method, url} = req;
    let finalDaUrl = ''

    if(url === '/colaboradores'){
        finalDaUrl = '/'
    }

    if(methods[method] && methods[method][finalDaUrl]){
        return methods[method][finalDaUrl](req, res);
    } else {
        methods.DEFAULT(req, res);
    }


}

module.exports = route;