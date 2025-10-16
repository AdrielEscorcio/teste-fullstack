const projetos = require("../controllers/projetoController");
const verificarRotaDinamica = require('../routes/funcoesAuxiliares')

let id = '';

const methods = {
    GET: {
        '/projetos': projetos.listarProjetos,
        '/projetos/:id': projetos.listarProjetoPorId
    },
    POST: {
        '/projetos': projetos.criarProjeto
    },
    PUT: {
        '/projetos/:id': projetos.atualizarProjeto
    },
    DELETE: {
        '/projetos/:id': projetos.deletarProjeto
    },
    DEFAULT: projetos.metodoNaoConhecido
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