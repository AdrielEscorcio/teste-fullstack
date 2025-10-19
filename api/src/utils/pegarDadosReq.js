function pegarDadosReq(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            try {
                const dados = JSON.parse(body);
               resolve(dados);
            } catch (error) {
                console.error('Erro ao analisar JSON:', error);
                reject(error);
            }
        });
        });
}
module.exports = pegarDadosReq;