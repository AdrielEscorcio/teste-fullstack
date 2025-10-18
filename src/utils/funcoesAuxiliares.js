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

}

const verificarControllerDinamico = (funcoesController, req, res) =>{
    const acoes = {
        GET: 'listar',
        POST: 'criar',
        PUT: 'atualizar',
        DELETE: 'deletar'
    }

    const {recurso, id, extra, idExtra} = req.params
    const {method} = req;

     if(!id){
        var acao = acoes[method]
    } else {
        var acao = `${acoes[method]}/:id`
    }

    if(extra){
        var acao = `${acoes[method]}/:id/:extra`
    
        if(idExtra){
        var acao = `${acoes[method]}/:id/:extra/:idExtra`
        }
    }

    if(funcoesController[acao]){
        return funcoesController[acao](req, res);
    }

    // if(funcoesController[recursoController] && funcoesController[recursoController][acao]){
    //     return funcoesController[recursoController][acao](req, res);
    // }
     
}

module.exports = {verificarRotaDinamica, verificarControllerDinamico};