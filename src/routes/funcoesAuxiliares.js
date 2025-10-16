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

module.exports = verificarRotaDinamica;