const fs = require('fs');

module.exports = (caminho) => {
  fs.createReadStream(caminho)
    .pipe(fs.createWriteStream('./assets/imagens/pastoralemao.jpg'))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))
}

