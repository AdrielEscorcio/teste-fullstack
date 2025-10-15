const listarColaboradores = require("../controllers/colaboradorController");

const methods = {
    GET: {
        '/': listarColaboradores
    }
}

const route = (req, res) => {
    const {method, url} = req;
    let finalDaUrl = ''

    if(url === '/colaboradores'){
        finalDaUrl = '/'
    }

    if(methods[method] && methods[method][finalDaUrl]){
        return methods[method][finalDaUrl](req, res);
    }


}

module.exports = route;