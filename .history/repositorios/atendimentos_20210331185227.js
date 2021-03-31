const query = require('../infraestrutura/database/queries');

class Atendimentos {
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        return query(sql,atendimento)
    }
    lista(){
        const sql = 'SELECT * FROM Atendimentos'
        return query(sql)
    }
}
module.exports = new Atendimentos();