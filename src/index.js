const http = require('http')
const recursoRouter = require('./routes/recursoRouter')

const receberRequisicao = (req, res) => {
        return recursoRouter(req, res);
}

const server = http.createServer(receberRequisicao)

const PORTA = 3001
server.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`))
