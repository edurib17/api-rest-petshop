const Pet = require('../models/pets');

module.exports = app =>{
    app.post('/pet',(req,res)=>{
        res.send('Ok')
    })
}