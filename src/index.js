const http = require('http')

const server = http.createServer()

PORTA = 3001
server.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`))
