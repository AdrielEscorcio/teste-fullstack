const colaboradores = require("../controllers/colaboradorController");

let id = '';

const methods = {
    GET: {
        '/': colaboradores.listarColaboradores,
        [id]: colaboradores.listarColaboradorPorId
    },
    POST: {
        '/': colaboradores.criarColaborador
    },
    PUT: {
        [id]: colaboradores.atualizarColaborador
    },
    DELETE: {
        [id]: colaboradores.deletarColaborador
    },
    DEFAULT: colaboradores.metodoNaoConhecido
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