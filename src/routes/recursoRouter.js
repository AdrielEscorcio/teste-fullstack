const { listarColaboradores, metodoNaoConhecido, listarColaboradorPorId, criarColaborador, atualizarColaborador, deletarColaborador } = require("../controllers/colaboradorController");
const { listarProjetos, listarProjetoPorId, criarProjeto, atualizarProjeto, deletarProjeto } = require("../controllers/projetoController");
const {verificarRotaDinamica, verificarControllerDinamico} = require('../utils/funcoesAuxiliares')

const funcoesController = {
    colaboradores: { 
        'listar': listarColaboradores,
        'listar/:id': listarColaboradorPorId,
        'criar': criarColaborador,
        'atualizar/:id': atualizarColaborador,
        'deletar/:id': deletarColaborador
    },
    projetos: {
        'listar': listarProjetos,
        'listar/:id': listarProjetoPorId,
        'criar': criarProjeto,
        'atualizar/:id': atualizarProjeto,
        'deletar/:id': deletarProjeto
    }
}

const methods = {
    GET: {
        '/:recurso': (req, res) => verificarControllerDinamico(funcoesController, req, res),
        '/:recurso/:id': (req, res) => verificarControllerDinamico(funcoesController, req, res)
    },
    POST: {
        '/:recurso': (req, res) => verificarControllerDinamico(funcoesController, req, res)
    },
    PUT: {
        '/:recurso/:id': (req, res) => verificarControllerDinamico(funcoesController, req, res)
    },
    DELETE: {
        '/:recurso/:id': (req, res) => verificarControllerDinamico(funcoesController, req, res)
    },
    DEFAULT: metodoNaoConhecido
}

const route = (req, res) => {

    return verificarRotaDinamica(methods, req, res)

}

module.exports = route;