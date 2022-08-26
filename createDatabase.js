var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234"
});


con.query('CREATE DATABASE locar;', (err) =>{
    if(err){
        return console.log(err)
    }

    console.log('Banco de Dados criado!')
    con.end()
})


