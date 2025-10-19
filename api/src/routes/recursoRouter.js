const { listarRecurso, listarRecursoPorId, criarRecurso, atualizarRecurso, deletarRecurso, listarRecursoPorIDs, listarExtraDeRecurso, deletarRecursoExtra, criarRecursoExtra } = require("../controllers/recursoController");
const {verificarRotaDinamica, verificarControllerDinamico} = require('../utils/funcoesAuxiliares')

const funcoesController = {
        'listar': listarRecurso,
        'listar/:id': listarRecursoPorId,
        'criar': criarRecurso,
        'atualizar/:id': atualizarRecurso,
        'deletar/:id': deletarRecurso,
        'listar/:id/:extra': listarExtraDeRecurso,
        'listar/:id/:extra/:idExtra': listarRecursoPorIDs,
        'criar/:id/:extra': criarRecursoExtra,
        'deletar/:id/:extra/:idExtra': deletarRecursoExtra
}

const methods = {
    GET: {
        '/:recurso': (req, res) => verificarControllerDinamico(funcoesController, req, res),
        '/:recurso/:id': (req, res) => verificarControllerDinamico(funcoesController, req, res),
        '/:recurso/:id/:extra': (req, res) => verificarControllerDinamico(funcoesController, req, res),
        '/:recurso/:id/:extra/:idExtra': (req, res) => verificarControllerDinamico(funcoesController, req, res)

    },
    POST: {
        '/:recurso': (req, res) => verificarControllerDinamico(funcoesController, req, res),
        '/:recurso/:id/:extra': (req, res) => verificarControllerDinamico(funcoesController, req, res)
    },
    PUT: {
        '/:recurso/:id': (req, res) => verificarControllerDinamico(funcoesController, req, res)
    },
    DELETE: {
        '/:recurso/:id': (req, res) => verificarControllerDinamico(funcoesController, req, res),
        '/:recurso/:id/:extra/:idExtra': (req, res) => verificarControllerDinamico(funcoesController, req, res)
    }
}

const route = (req, res) => {

    return verificarRotaDinamica(methods, req, res)

}

module.exports = route;