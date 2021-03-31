const conexao = require('../infraestrutura/conexao');


class Pet {
    adiciona(pet,res){
        const query = 'INSERT INTO Pets ?'
        conexao.query(query,pet,erro=>{
            if(erro){
                console.log(erro)
            }
        })
    }
}