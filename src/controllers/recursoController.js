const base = require("../models/recursoModel");
const pegarDadosReq = require("../utils/pegarDadosReq");
const statusCodeHttp = require("../utils/statusCodeHttp");

function verificarRecursoColaboradorTecnologia(recurso, extra){
    if(recurso === 'colaborador' || recurso === 'tecnologia'){
        return `${extra}_${recurso}`
    } else {
        return `${recurso}_${extra}`;
    }

}

const listarRecurso = (req, res) => {

    const { recurso, extra } = req.params;

    var recursoInserido = recurso;

    const rescursoModel = base(recursoInserido);
    const resultado = rescursoModel.listar();
    res.end(JSON.stringify({ resultado }));
}

const listarRecursoPorId = (req, res) => {

    const { recurso, id } = req.params;

    var recursoInserido = recurso;

    const rescursoModel = base(recursoInserido);
    const resultado = rescursoModel.listarPorID(id);
    res.writeHead(statusCodeHttp.ok, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({codHttp: statusCodeHttp.ok, resultado }));
}

const listarRecursoPorIDs = (req, res) => {
    const { recurso, id, extra, idExtra } = req.params;

    const recursoInserido = verificarRecursoColaboradorTecnologia(recurso, extra)
    
    const rescursoModel = base(recursoInserido);
    const resultado = rescursoModel.listarPorIDs(recurso, id, extra, idExtra);
    res.end(JSON.stringify({ resultado }));
}

const listarExtraDeRecurso = (req, res) => {
    const { recurso, id, extra } = req.params;

    const recursoInserido = verificarRecursoColaboradorTecnologia(recurso, extra)

    const rescursoModel = base(recursoInserido);
    const resultado = rescursoModel.listarExtraDeRecurso(id, extra, recurso);
    res.writeHead(statusCodeHttp.ok, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ codHttp: statusCodeHttp.ok, resultado }));
}

const criarRecurso = async (req, res) => {

    const dados = await pegarDadosReq(req);
    const { recurso } = req.params;

    const rescursoModel = base(recurso);
    const resultado = rescursoModel.inserir(dados);
    res.end(JSON.stringify({ resultado }));
}

const criarRecursoExtra = async (req, res) => {
    const dados = await pegarDadosReq(req)
    console.log(dados)
    const { recurso, id, extra } = req.params

    const recursoInserido = verificarRecursoColaboradorTecnologia(recurso, extra)

    const recursoModel = base(recursoInserido)
    const resultado = recursoModel.criarRecursoExtra(recurso, id, extra, dados)
    res.writeHead(statusCodeHttp.ok, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ codHttp: statusCodeHttp.ok, resultado }));
}

const atualizarRecurso = (req, res) => {
    res.end('Atualizar Recurso Controller');
}

const deletarRecurso = (req, res) => {
    res.end('Deletar Recurso Controller');
}

const deletarRecursoExtra = (req,res) => {
    const {recurso, id, extra, idExtra} = req.params

    const recursoInserido = verificarRecursoColaboradorTecnologia(recurso, extra)
    const recursoModel = base(recursoInserido)
    const resultado = recursoModel.deletarRecursoExtra(recurso, id, extra, idExtra)
    res.end(JSON.stringify({ resultado }))

}

module.exports = { listarRecurso, listarRecursoPorId, listarRecursoPorIDs, listarExtraDeRecurso,
     criarRecurso,criarRecursoExtra, atualizarRecurso, deletarRecurso, deletarRecursoExtra };