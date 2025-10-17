const { metodoNaoConhecido } = require("../controllers/colaboradorController");

const verificarRotaDinamica = (methods, req, res) => {
    const { method, url } = req;

    if (methods[method]) {
        const urlSegmentos = url.split('/').filter(Boolean);

        for (const rotaPadrao in methods[method]) {
            const segmentosPadrao = rotaPadrao.split('/').filter(Boolean);

            if (urlSegmentos.length === segmentosPadrao.length) {
                const params = {};
                let segmentosIguais = true;

                for (let i = 0; i < urlSegmentos.length; i++) {
                    if (segmentosPadrao[i].startsWith(':')) {
                        const paramName = segmentosPadrao[i].substring(1);
                        params[paramName] = urlSegmentos[i];
                    } else if (segmentosPadrao[i] !== urlSegmentos[i]) {
                        segmentosIguais = false;
                        break;
                    }
                }

                if (segmentosIguais) {
                    req.params = params; 
                    return methods[method][rotaPadrao](req, res);
                }
            }
        }
    }

    return metodoNaoConhecido(req, res);
}

const verificarControllerDinamico = (funcoesController, req, res) =>{
    const acoes = {
        GET: 'listar',
        POST: 'criar',
        PUT: 'atualizar',
        DELETE: 'deletar'
    }

    const {recurso, id} = req.params
    const {method} = req;

    if(!id){
        var acao = acoes[method]
    } else {
        var acao = `${acoes[method]}/:id`
    }
    if(funcoesController[recurso] && funcoesController[recurso][acao]){
        return funcoesController[recurso][acao](req, res);
    }
     
}

module.exports = {verificarRotaDinamica, verificarControllerDinamico};