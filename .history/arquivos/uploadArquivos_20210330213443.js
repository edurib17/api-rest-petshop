const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeArquivo, callbackImagemCriada) => 
{
  const tiposValidos = ['jpg','png','jpeg']
  const tipo = path.extname(caminho)
  const novoCaminho = `./assets/imagens/${nomeArquivo}${tipo}`;
  fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(novoCaminho))
    .on('finish', () => callbackImagemCriada(novoCaminho))
}

