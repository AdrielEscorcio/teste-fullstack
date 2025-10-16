const colaboradores = require("../controllers/colaboradorController");
const verificarRotaDinamica = require('../routes/funcoesAuxiliares')

let id = '';

const methods = {
    GET: {
        '/colaboradores': colaboradores.listarColaboradores,
        '/colaboradores/:id': colaboradores.listarColaboradorPorId
    },
    POST: {
        '/colaboradores': colaboradores.criarColaborador
    },
    PUT: {
        '/colaboradores/:id': colaboradores.atualizarColaborador
    },
    DELETE: {
        '/colaboradores/:id': colaboradores.deletarColaborador
    },
    DEFAULT: colaboradores.metodoNaoConhecido
}

const route = (req, res) => {
    const {method, url} = req;
    
    if(methods[method] && methods[method][url]){
        return methods[method][url](req, res);
    } else {
       return verificarRotaDinamica(methods, req, res)
    }

    


}

module.exports = route;