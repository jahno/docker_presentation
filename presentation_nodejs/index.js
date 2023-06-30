const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());


// 

var connection;
//config bd

try {
      connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    
} catch (error) {
    console.log(error)
    setTimeout(()=>{

          connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: 'root',
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        
    },3000)
}

 


//insertion 
app.post('/data', (req, res) => {
 const message = req.body.message;
  connection.query('INSERT INTO data(message) VALUES (?)', [message], (error, results) => {
    if (error) throw error;
    res.send('Données stockées avec succès !');
  });
});

// Route pour afficher les données
app.get('/data', (req, res) => {
  connection.query('SELECT * FROM data', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// Route index
app.get('/', (req, res) => {
  res.send('Je suis une application Node.js développée pour la présentation.');
});

// Écoute du port 3000
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
