const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeArquivo, callbackImagemCriada) => 
{
  const tipo = path.extname(caminho)
  const novoCaminho = `./assets/imagens/${nomeArquivo}${tipo}`;
  fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(novoCaminho))
    .on('finish', () => callbackImagemCriada(novoCaminho))
}

