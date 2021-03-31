const { query } = require('./conexao');
const conexao = require('./conexao');


const executeQuery = (query, paramentros = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, paramentros, (erros, resultados, campos) => {
            if (erros) {
            } else {
            }
        })
    })

}