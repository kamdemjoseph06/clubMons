const date = new Date().toISOString().split('T')[0]; //YYYY-MM--DD
const sqlite3 = require('sqlite3').verbose();
const express = require('express')
const fs = require('fs')
const path = require('path')
const { json } = require("express");

// Open a database connection. If the file doesn't exist, it will be created.
const db = new sqlite3.Database('./clubMons.db',sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message);
    else {console.log('Connected to the SQLite database.');}
});

// Affichage des pages
const app = express()
const hostname = "127.0.0.1";                    // le localhost qui peut etre modifier
const PORT = process.env.PORT || 3000;           // le port qui peut etr modifier
app.use(express.static("public"))                //Afficher les fichiers statiques
app.use(express.json());                         //Pour parser le body JSON
app.use(express.urlencoded({extended:true}));    //Pour parser les données de formulaire
app.set('view engine', 'ejs')                    // Utilisation des fichiers .ejs
// app.set('view', './views')                    // Utilisation des fichiers .ejs
//////////////////////////
 
// Affichage des pages
//////////////////////////Page d'Aaccueil
app.get('/',(req,res) =>{
    const indexHtml = fs.readFileSync(__dirname + "/public/Accueil.html", "utf-8")
    res.send(indexHtml)
});
app.get('/accueil',(req,res) =>{
  res.sendFile(path.join(__dirname,'public','Accueil.html'))
});
// 

/////////////////////////Page Inscription
app.get('/inscription',(req,res) =>{
  res.sendFile(path.join(__dirname,'public','Inscription.html'))
});

app.get('/inscription',(req,res) =>{  
  const indexHtml = fs.readFileSync(__dirname + "/public/Inscription.html", "utf-8")
  res.send(indexHtml)
});

app.post('/inscription',(req,res) =>{
  const {Noms,Prenom,dateBirth,Code,MotPasse}= req.body //Insertion des doonées
  // app.get utlise req.query et non req.body
  if (!Noms || !Prenom || !dateBirth || !Code ||  !MotPasse ){
    return res.status(400).send('Champs manquants');
  }

  // Insertion des champs utilisateurs
  db.run("INSERT INTO users(noms,prenoms,dayBirth,codeVeteran,password) VALUES (?,?,?,?,?)",[Noms,Prenom,dateBirth,Code,MotPasse],(err) =>{
    if (err) {
      console.error(err);
      return res.status(500).json({message:"Erreur d'enregistrement"})                        // avec la methode send() sur res.status() send("Erreur d'enregistrement");
    }
      return res.json({message:"Inscription réussie"})                                       // avec la methode send() sur res.status() .send('Inscription réussie');
  });
}); 
// 

/////////////////////////Page Connection
app.get('/connection',(req,res) =>{
  res.sendFile(path.join(__dirname,'public','Connection.html'))
});

app.get('/connection',(req,res) =>{
  const indexHtml = fs.readFileSync(__dirname + "/public/Connection.html", "utf-8")
  res.send(indexHtml)
})

app.post('/connection',(req,res) =>{
  const {NomUsers,PassUsers}= req.body //Insertion des doonées
  // app.get utlise req.query et non req.body
  if (!NomUsers  ||  !PassUsers ){  // || !Prenom || !dateBirth || !Code
    return res.status(400).send('Champs manquants');
  }
  // Verification des champs utilisateurs
  db.get("SELECT * FROM users WHERE (noms=? AND password=?) OR (prenoms=? AND password=?) OR (prenoms=? AND codeVeteran=?) OR (noms=? AND codeVeteran=?) ",[NomUsers,PassUsers,NomUsers,PassUsers,NomUsers,PassUsers,NomUsers,PassUsers ],(err,row) =>{ 
    if (err || !row) {
      res.status(401).json({message:"Identifiants Incorrects"})                        // avec la methode send() sur res.status() send("Erreur d'enregistrement"); // render('public/Connection.html',{message:"Identifiants Incorrects"} ); //  status(401).json({message:"Identifiants Incorrects"})                        // avec la methode send() sur res.status() send("Erreur d'enregistrement");
    }
    else {return res.redirect('/Compte')}       // return res.json({message:"connection réussie",utilisateur: row})              // avec la methode send() sur res.status() .send('Inscription réussie');
  });

});  
/////////////////////////

/////////////////////////Page Evènement
app.get('/evenement',(req,res) =>{
  res.sendFile(path.join(__dirname,'public','Evènement.html'))
});

app.get('/evenement',(req,res) =>{
  const indexHtml = fs.readFileSync(__dirname + "/public/Evènement.html", "utf-8")
  res.send(indexHtml)
})
////////////////////////

/////////////////////////Page Historique
app.get('/historique',(req,res) =>{
  res.sendFile(path.join(__dirname,'public','Historique.html'))
});

app.get('/historique',(req,res) =>{
  const indexHtml = fs.readFileSync(__dirname + "/public/Historique.html", "utf-8")
  res.send(indexHtml) 
})
////////////////////////

////////////////////////Page Paramètres
app.get('/Compte',(req,res) =>{
  res.sendFile(path.join(__dirname,'public','Paramètre.html'))
});

app.get('/parametres',(req,res) =>{
  const indexHtml = fs.readFileSync(__dirname + "/public/Paramètre.html", "utf-8")
  res.send(indexHtml)
})
/////////////////////////

// Creation du serveur et installation de (yarn install nodemon -D ) en developpement
app.listen(PORT, () => {
  console.log(`Le serveur a démaré ${PORT}`);
});

// Creation des bases de données
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    noms TEXT NOT NULL,
    prenoms TEXT NOT NULL,
    dayBirth NOT NULL,
    codeVeteran TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL UNIQUE
  )`, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Table "users" created or already exists.');
    }
  });
}); 

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS multimedia (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    description TEXT,
    personne_id NOT NULL,
    FOREIGN KEY(personne_id) REFERENCES users(id)
  )`, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Table "multimedia" created or already exists.');
    }
  });  
});  
/////////////////////
