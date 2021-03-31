const fs = require('fs');

module.exports = (caminho,nomeArquivo,callbackImagemCriada) => {
  fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(`./assets/imagens/${nomeArquivo}`))
    .on('finish',()=> callbackImagemCriada)
}

