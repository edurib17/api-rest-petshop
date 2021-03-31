const fs = require('fs');

module.exports = (caminho,nomeArquivo) => {
  fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(`./assets/imagens/${nomeArquivo}`))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))
}

