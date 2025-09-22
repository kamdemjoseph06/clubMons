// const date = new Date().toISOString().split('T')[0]; //YYYY-MM--DD
// import { Database, Resource } from '@adminjs/sql'; //const sqlite3 = require('sqlite3').verbose();
// import sqlite3 from 'sqlite3';
// import express from 'express';                     // synstaxe utiliser quand dans package.json "type":"commonJS" const express = require('express');
// import fs from 'fs';                               // const fs = require('fs');
// import path from 'path';                           // const path = require('path');
// import { fileURLToPath } from 'url';
// import { dirname,join } from 'path';
// import { json } from "express";                    //const { json } = require("express");
// import AdminJS from 'adminjs';                     //const AdminJS = require('adminjs');
// import AdminJSExpress from '@adminjs/express';     //const AdminJSExpress = require('@adminjs/express');
// // const UserResource = Resource.from(db, 'users');   //const UserResource = require('./userResource');
// import { Console } from 'console'                  //const { Console } = require('console');
// import { UserResource, TextResource, FileResource } from './resources/UserResource.js';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// // Open a database connection. If the file doesn't exist, it will be created.
// // const db = new Database({
// //   client: 'sqlite3',                        // type de base
// //   connection: './clubMons.sqlite3',         // chemin vers le fichier SQLite
// // });


// ////////////////////// Ancien code mais correct sans AdminJSV7
// const db = new sqlite3.Database('./clubMons.db',sqlite3.OPEN_READWRITE,(err)=>{
//     if (err) return console.error(err.message);
//     else {console.log('Connected to the SQLite database.');}
// });


// // Creation des bases de données
// db.serialize(() => {
//   db.run(`CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     noms TEXT NOT NULL,
//     prenoms TEXT NOT NULL,
//     dayBirth TEXT NOT NULL,
//     codeVeteran TEXT NOT NULL UNIQUE,
//     password TEXT NOT NULL UNIQUE
//   )`, (err) => {
//     if (err) {
//       console.error(err.message);
//     } else {
//       console.log('Table "users" created or already exists.');
//     }
//   });
// }); 

// db.serialize(() => {
//   db.run(`CREATE TABLE IF NOT EXISTS multimedia (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     url TEXT NOT NULL,
//     description TEXT,
//     personne_id INTEGER NOT NULL,
//     FOREIGN KEY(personne_id) REFERENCES users(id)
//   )`, (err) => {
//     if (err) {
//       console.error(err.message);
//     } else {
//       console.log('Table "multimedia" created or already exists.');
//     }
//   });  
// }); 

// db.serialize(() => {
//   db.run(`CREATE TABLE IF NOT EXISTS text (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     textes TEXT,
//     pages TEXT
//   )`, (err) => {
//     if (err) {
//       console.error(err.message);
//     } else {
//       console.log('Table "text" created or already exists.');
//     }
//   });  
// }); 
// /////////////////////


// ////
// // const UserResource = Resource.from(db, 'users');
// // const TextResource = Resource.from(db, 'text');
// // const FileResource = Resource.from(db, 'multimedia'); 
// //////////////////////////////////////////

// // Declarer AdminJS avec notre costom
// const adminJS = new AdminJS({
//   resources: [UserResource, TextResource, FileResource],
//   rootPath: '/admin',
// })

// // Affichage des pages
// const app = express()
// app.use(express.static("public"))                //Afficher les fichiers statiques   
// const router = AdminJSExpress.buildRouter(adminJS)
// app.use(adminJS.options.rootPath,router)
// // const hostname = "127.0.0.1";                 // le localhost qui peut etre modifier
// const PORT = process.env.PORT || 3000;           // le port qui peut etr modifier       
// app.use(express.json());                         //Pour parser le body JSON
// app.use(express.urlencoded({extended:true}));    //Pour parser les données de formulaire
// app.set('view engine', 'ejs')                    // Utilisation des fichiers .ejs
// // app.set('view', './views')                    // Utilisation des fichiers .ejs
// //////////////////////////
 
// // Affichage des pages
// //////////////////////////Page d'Aaccueil
// app.get('/',(req,res) =>{
//     const indexHtml = fs.readFileSync(__dirname + "/public/Accueil.html", "utf-8")
//     res.send(indexHtml)
// });
// app.get('/accueil',(req,res) =>{
//   res.sendFile(path.join(__dirname,'public','Accueil.html'))
// });
// // 

// /////////////////////////Page Inscription
// app.get('/inscription',(req,res) =>{
//   res.sendFile(path.join(__dirname,'public','Inscription.html'))
// });

// app.get('/inscription',(req,res) =>{  
//   const indexHtml = fs.readFileSync(__dirname + "/public/Inscription.html", "utf-8")
//   res.send(indexHtml) 
// });

// app.post('/inscription',(req,res) =>{
//   const {Noms,Prenom,dateBirth,Code,MotPasse}= req.body //Insertion des doonées
//   // app.get utlise req.query et non req.body
//   if (!Noms || !Prenom || !dateBirth || !Code ||  !MotPasse ){
//     return res.status(400).send('Champs manquants');
//   }

//   // Insertion des champs utilisateurs
//   db.run("INSERT INTO users(noms,prenoms,dayBirth,codeVeteran,password) VALUES (?,?,?,?,?)",[Noms,Prenom,dateBirth,Code,MotPasse],(err) =>{
//     if (err) {
//       console.error(err);
//       return res.status(500).json({message:"Erreur d'enregistrement"})                        // avec la methode send() sur res.status() send("Erreur d'enregistrement");
//     }
//       return res.json({message:"Inscription réussie"})                                       // avec la methode send() sur res.status() .send('Inscription réussie');
//   });
// }); 
// // 

// /////////////////////////Page Connection
// app.get('/connection',(req,res) =>{
//   res.sendFile(path.join(__dirname,'public','Connection.html'))
// });

// app.get('/connection',(req,res) =>{
//   const indexHtml = fs.readFileSync(__dirname + "/public/Connection.html", "utf-8")
//   res.send(indexHtml)
// })

// app.post('/connection',(req,res) =>{
//   const {NomUsers,PassUsers}= req.body //Insertion des doonées
//   // app.get utlise req.query et non req.body
//   if (!NomUsers  ||  !PassUsers ){  // || !Prenom || !dateBirth || !Code
//     return res.status(400).send('Champs manquants');
//   }
//   // Verification des champs utilisateurs
//   db.get("SELECT * FROM users WHERE (noms=? AND password=?) OR (prenoms=? AND password=?) OR (prenoms=? AND codeVeteran=?) OR (noms=? AND codeVeteran=?) ",[NomUsers,PassUsers,NomUsers,PassUsers,NomUsers,PassUsers,NomUsers,PassUsers ],(err,row) =>{ 
//     if (err || !row) {
//       res.status(401).json({message:"Identifiants Incorrects"})                        // avec la methode send() sur res.status() send("Erreur d'enregistrement"); // render('public/Connection.html',{message:"Identifiants Incorrects"} ); //  status(401).json({message:"Identifiants Incorrects"})                        // avec la methode send() sur res.status() send("Erreur d'enregistrement");
//     }
//     else {return res.redirect('/Compte')}       // return res.json({message:"connection réussie",utilisateur: row})              // avec la methode send() sur res.status() .send('Inscription réussie');
//   });

// });  
// //

// /////////////////////////Page Actualité
// app.get('/actualite',(req,res) =>{
//   res.sendFile(path.join(__dirname,'public','Actualite.html'))
// });

// app.get('/actualite',(req,res) =>{
//   const indexHtml = fs.readFileSync(__dirname + "/public/Actualite.html", "utf-8")
//   res.send(indexHtml)
// });

// app.get('/actualite',(req,res) =>{
//   // Verification des champs
//   db.get("SELECT * FROM multimedia ",(err,row) =>{ 
//     if (err || !row) {
//       res.status(401).json({message:"Fichiers inexistants"})                        // avec la methode send() sur res.status() send("Erreur d'enregistrement"); // render('public/Connection.html',{message:"Identifiants Incorrects"} ); //  status(401).json({message:"Identifiants Incorrects"})                        // avec la methode send() sur res.status() send("Erreur d'enregistrement");
//     }
//     else {return res.json({message:"Fichiers existants"})}       //res.redirect('/Compte') return res.json({message:"connection réussie",utilisateur: row})              // avec la methode send() sur res.status() .send('Inscription réussie');
//   });
// }); 
// //

// /////////////////////////Page Evènement
// app.get('/evenement',(req,res) =>{
//   res.sendFile(path.join(__dirname,'public','Evenement.html'))
// });

// app.get('/evenement',(req,res) =>{
//   const indexHtml = fs.readFileSync(__dirname + "/public/Evenement.html", "utf-8")
//   res.send(indexHtml)
// })
// //

// /////////////////////////Page Historique
// app.get('/historique',(req,res) =>{
//   res.sendFile(path.join(__dirname,'public','Historique.html'))
// });

// app.get('/historique',(req,res) =>{
//   const indexHtml = fs.readFileSync(__dirname + "/public/Historique.html", "utf-8")
//   res.send(indexHtml) 
// })
// //

// ////////////////////////Page Paramètres
// app.get('/Compte',(req,res) =>{
//   res.sendFile(path.join(__dirname,'public','Parametre.html'))
// });

// app.get('/parametres',(req,res) =>{
//   const indexHtml = fs.readFileSync(__dirname + "/public/Parametre.html", "utf-8")
//   res.send(indexHtml)
// })
// //
// // Autres routes publiques
// const pages = ['Actualite', 'Evènement', 'Historique', 'Paramètre', 'Accueil'];
// pages.forEach((page) => {
//   app.get(`/${page.toLowerCase()}`, (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', `${page}.html`));
//   });
// });




// // Creation du serveur et installation de (yarn install nodemon -D ) en developpement

// app.listen(PORT, () => {
//   console.log(`Le serveur a démaré ${PORT}`);
//   // console.log('AdminJS ${admin.options.rootPath}')
// });



// corrige chatgpt

// index.js
import express from 'express';
import sqlite3 from 'sqlite3';
import fs from 'fs';
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';




// ========================
// 1️ __dirname et __filename
// ========================
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

// ========================
// 2️ Initialiser SQLite
// ========================
const sqliteDB = new sqlite3.Database(join(__dirname, 'clubMons.db'), sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) return console.error(err.message);
  console.log('Connected to SQLite database.');
});
 

// ========================
// 3️ Créer les tables si elles n'existent pas
// ========================
sqliteDB.serialize(() => {
  sqliteDB.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    noms TEXT NOT NULL,
    prenoms TEXT NOT NULL,
    dayBirth TEXT NOT NULL,
    codeVeteran TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )`);

  sqliteDB.run(`CREATE TABLE IF NOT EXISTS multimedia (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    description TEXT,
    personne_id INTEGER NOT NULL,
    FOREIGN KEY(personne_id) REFERENCES users(id)
  )`);

  sqliteDB.run(`CREATE TABLE IF NOT EXISTS text (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    textes TEXT,
    pages TEXT
  )`);
});

// ========================
// 5️ Express
// ========================
const app = express();
app.use(express.static(join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(adminJs.options.rootPath, router);

// ========================
// 6️ Routes HTML simplifiées 
// ========================
const pages = ['Accueil', 'Inscription', 'Connection', 'Actualite', 'Evenement', 'Historique', 'Parametre', 'Compte'];
pages.forEach(page => {
  app.get(`/${page.toLowerCase()}`, (req, res) => {
    res.sendFile(join(__dirname, 'public', `${page}.html`));
  });
});

// ========================
// 7️ Routes POST (Inscription / Connexion)
// ========================

app.post('/inscription',(req,res) =>{
  const {Noms,Prenom,dateBirth,Code,MotPasse}= req.body //Insertion des doonées
  // app.get utlise req.query et non req.body
  if (!Noms || !Prenom || !dateBirth || !Code ||  !MotPasse ){
    return res.status(400).send('Champs manquants');
  }

  // Insertion des champs utilisateurs
  sqliteDB.run("INSERT INTO users(noms,prenoms,dayBirth,codeVeteran,password) VALUES (?,?,?,?,?)",[Noms,Prenom,dateBirth,Code,MotPasse],(err) =>{
    if (err) {
      console.error(err);
      return res.status(500).json({message:"Erreur d'enregistrement"})                        // avec la methode send() sur res.status() send("Erreur d'enregistrement");
    }
      return res.json({message:"Inscription réussie"})                                       // avec la methode send() sur res.status() .send('Inscription réussie');
  });
});


app.post('/connection', (req, res) => {
  const { NomUsers, PassUsers } = req.body;
  if (!NomUsers || !PassUsers) return res.status(400).send('Champs manquants');

  sqliteDB.get(
    "SELECT * FROM users WHERE (noms=? AND password=?) OR (prenoms=? AND password=?) OR (prenoms=? AND codeVeteran=?) OR (noms=? AND codeVeteran=?)",
    [NomUsers, PassUsers, NomUsers, PassUsers, NomUsers, PassUsers, NomUsers, PassUsers],
    (err, row) => {
      if (err || !row) return res.status(401).json({ message: "Identifiants Incorrects" });
      else{return res.redirect('/actualite')}
    }
  );
});

///
app.post('/actualite', (req, res) => {
  sqliteDB.all(
    `SELECT * FROM multimedia`, [], (err, rows) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
});
// ========================
// 8️ Lancer le serveur
// ========================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);

});
