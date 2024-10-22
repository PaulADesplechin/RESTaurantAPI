const express = require('express')
const mysql = require('mysql')
const app = express()
const expressPort = 3000
app.use(express.json())
const database = mysql.createConnection({
    host :'localhost',
    port : '3306', 
    user: 'root',
    password: 'root',
    database: 'RESTaurantAPI',
})
database.connect((err) => {
    if (err) {
        console.log('ERREUR DE CONNEXION A LA DATABASE !');
    }
    else {
        console.log('BRAVO, VOUS ÊTES CONNECTÉ À LA DATABASE !')
    }
}),
app.listen(expressPort, () => {
    console.log('MON SERVEUR TOURNE SUR LE PORT : ', expressPort);
});