const projetos = require("../controllers/projetoController");

let id = '';

const methods = {
    GET: {
        '/': projetos.listarProjetos,
        [id]: projetos.listarProjetoPorId
    },
    POST: {
        '/': projetos.criarProjeto
    },
    PUT: {
        [id]: projetos.atualizarProjeto
    },
    DELETE: {
        [id]: projetos.deletarProjeto
    },
    DEFAULT: projetos.metodoNaoConhecido
}

const route = (req, res) => {
    const {method, url} = req;
    let finalDaUrl = ''

    if(url === '/projetos'){
        finalDaUrl = '/'
    }

    if(methods[method] && methods[method][finalDaUrl]){
        return methods[method][finalDaUrl](req, res);
    } else {
        methods.DEFAULT(req, res);
    }


}

module.exports = route;