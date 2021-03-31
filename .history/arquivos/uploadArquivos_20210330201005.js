const fs = require('fs');

fs.readFile('./assets/pastor_alemao-p.jpg',(erro,buffer)=>{
    console.log('Imagem foi bufferizada')

    fs.writeFile('./assets/pastoralemao2.jpg',buffer,erro=>{
            console.log('Imagem foi escrita')
    })
});