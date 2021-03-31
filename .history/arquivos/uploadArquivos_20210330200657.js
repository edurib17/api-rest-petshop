const fs = require('fs');

fs.readFile('./assets/pastor_alemao-p.jpg',(erro,buffer)=>{
    console.log('Imagem foi bufferizada')
    console.log(buffer)
});