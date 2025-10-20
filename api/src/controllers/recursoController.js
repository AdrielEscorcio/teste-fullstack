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

function resSucessoVarios(dados, res){

    res.writeHead(statusCodeHttp.ok, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify([...dados]));

}

function resSucesso(dados, res){

    res.writeHead(statusCodeHttp.ok, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(dados));

}

const listarRecurso = async (req, res) => {
    try{
        const { recurso, extra } = req.params;

        const rescursoModel = base(recurso);
        const resultado = await rescursoModel.listar();
        
        return resSucessoVarios(resultado, res)
    } catch(error) {
        res.end(JSON.stringify({Mensagem: 'Erro ao listar recurso', error}))
    }
    
}

const listarRecursoPorId =  async(req, res) => {

    try{
        const { recurso, id } = req.params;

        const rescursoModel = base(recurso);
        const resultado = await rescursoModel.listarPorID(id);
        
        return resSucesso(resultado, res)

    } catch (error){
        res.end(JSON.stringify({Mensagem: 'Erro ao listar recurso', error}))
    }
    
}

const listarRecursoPorIDs = async (req, res) => {
    const { recurso, id, extra, idExtra } = req.params;

    const recursoInserido = verificarRecursoColaboradorTecnologia(recurso, extra)
    
    const rescursoModel = base(recursoInserido);
    const resultado = await rescursoModel.listarPorIDs(recurso, id, extra, idExtra);
    return resSucesso(resultado, res)
}

const listarExtraDeRecurso = async (req, res) => {
    try {
        const { recurso, id, extra } = req.params;

        const recursoInserido = verificarRecursoColaboradorTecnologia(recurso, extra)

        const rescursoModel = base(recursoInserido);
        const resultado = await rescursoModel.listarExtraDeRecurso(id, extra, recurso);
        return resSucesso(resultado, res)    
    } catch (error) {
        res.end(JSON.stringify({Mensagem: 'Erro ao criar recurso', error}))
        
    }
    
}

const criarRecurso = async (req, res) => {
    try{
        const dados = await pegarDadosReq(req);
        const { recurso } = req.params;

        const rescursoModel = base(recurso);
        const resultado = await rescursoModel.inserir(dados);
        
        return resSucesso(resultado, res)

    } catch (error){
        res.end(JSON.stringify({message: 'Erro ao criar', error}))
    }
}

const criarRecursoExtra = async (req, res) => {
    try {
        const dados = await pegarDadosReq(req)
        const { recurso, id, extra } = req.params

        const recursoInserido = verificarRecursoColaboradorTecnologia(recurso, extra)

        const recursoModel = base(recursoInserido)
        const resultado = await recursoModel.criarRecursoExtra(recurso, id, extra, dados)
        
        return resSucesso(resultado, res)
    } catch (error) {
        res.end(JSON.stringify({Mensagem: 'Erro ao criar recurso', error}))
    }
}

const atualizarRecurso = async (req, res) => {
    try {
        const dados = await pegarDadosReq(req)
        const { recurso, id } = req.params

        const recursoModel = base(recurso)
        recursoModel.atualizar(id, dados)
        await listarRecursoPorId(req, res)

    } catch (error){
        res.end(JSON.stringify({Mensagem: 'Erro ao listar recurso', error}))
    }
    
}

const deletarRecurso = async (req, res) => {
    try{
        const { recurso, id } = req.params

        const recursoModel = base(recurso)

        const resultado = await recursoModel.deletar(id)

        return resSucesso(resultado, res)

    } catch (error) {
        res.end(JSON.stringify({Mensagem: 'Erro ao deletar recurso', error}))
    }
    

}

const deletarRecursoExtra = async (req,res) => {
    try {
        const {recurso, id, extra, idExtra} = req.params

        const recursoInserido = verificarRecursoColaboradorTecnologia(recurso, extra)
        const recursoModel = base(recursoInserido)
        const resultado = await recursoModel.deletarRecursoExtra(recurso, id, extra, idExtra)
        
        return resSucesso(resultado, res)    
    } catch (error) {
        res.end(JSON.stringify({Mensagem: 'Erro ao criar recurso', error}))
    }
    
}

module.exports = { listarRecurso, listarRecursoPorId, listarRecursoPorIDs, listarExtraDeRecurso,
     criarRecurso,criarRecursoExtra, atualizarRecurso, deletarRecurso, deletarRecursoExtra };