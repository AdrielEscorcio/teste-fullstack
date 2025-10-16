const http = require('http')
const colaborador = require('./routes/colaboradorRouter')
const projeto = require('./routes/projetoRouter')

const receberRequisicao = (req, res) => {

    if(req.url.startsWith('/colaboradores')){
        return colaborador(req, res);
    }

    if (req.url.startsWith('/projetos')) {
        return projeto(req, res);
    };
}

const server = http.createServer(receberRequisicao)

const PORTA = 3001
server.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`))
