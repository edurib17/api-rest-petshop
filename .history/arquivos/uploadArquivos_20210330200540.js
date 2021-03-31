const fs = require('fs');

fs.readFile('../assets/pastor_alemao.jpg',(erro,buffer)=>{
    console.log('Imagem foi bufferizada')
    console.log(buffer)
});