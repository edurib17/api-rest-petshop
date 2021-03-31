const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeArquivo, callbackImagemCriada) => {
  const tiposValidos = ['jpg', 'png', 'jpeg']
  const tipo = path.extname(caminho)
  const tipoEhValidp = tiposValidos.indexOf(tipo.substring(1)) !== -1

  if (tipoEhValidp) {
    const erro = 'Tipo é inválido'
    console.log('ERRO!! Tipo inválido')
    callbackImagemCriada(erro)
  } else {

    const novoCaminho = `./assets/imagens/${nomeArquivo}${tipo}`;
    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on('finish', () => callbackImagemCriada(false,novoCaminho))
  }
}

