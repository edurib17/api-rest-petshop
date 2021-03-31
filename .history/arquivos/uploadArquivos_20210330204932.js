const fs = require('fs');


fs.createReadStream('./assets/pastor_alemao-p.jpg')
  .pipe(fs.createReadStream('./assets/pastoralemao.jpg'))