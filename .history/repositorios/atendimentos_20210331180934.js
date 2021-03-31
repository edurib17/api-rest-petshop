const query = require('../infraestrutura/database/queries');

class Atendimentos {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        return query(sql,atendimento)
    }
}


module.exports = new Atendimentos();