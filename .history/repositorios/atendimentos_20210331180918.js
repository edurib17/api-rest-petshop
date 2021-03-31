const query = require('../infraestrutura/database/queries');

class Atendimentos {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        query(sql,atendimento)

    }
}


module.exports = new Atendimentos();