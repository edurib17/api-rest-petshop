const fs = require('fs');

module.exports = (caminho) => {
  fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(`./assets/imagens/${nomeArquivo}`))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))
}

