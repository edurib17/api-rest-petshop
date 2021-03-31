const fs = require('fs');

module.exports = (caminho) => {
  fs.createReadStream('./assets/pastor_alemao-p.jpg')
    .pipe(fs.createWriteStream('./assets/pastoralemao.jpg'))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))
}

