const conexao = require('../infraestrutura/conexao');
const uploadDeArquivos = require('../arquivos/uploadArquivos');

class Pet {
    adiciona(pet,res){
        const query = 'INSERT INTO Pets SET ?'
        uploadDeArquivos(pet.imagem,pet.nome,(novoCaminho)=>{

        })
        conexao.query(query,pet,erro=>{
            if(erro){
                console.log(erro)
                res.status(400).json(erro)
            }else {
                res.status(200).json(pet)
            }
        })
    }
}

module.exports = new Pet()