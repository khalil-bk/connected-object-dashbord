const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Remplacez 'YOUR_FIREBASE_CONFIG' par votre configuration Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyDVJzUobDXduhtwK5WgQIuSWpRft5fnMfI",
    authDomain: "dashbord-ede80.firebaseapp.com",
    projectId: "dashbord-ede80",
    storageBucket: "dashbord-ede80.appspot.com",
    messagingSenderId: "1055939869534",
    appId: "1:1055939869534:web:d1df40d471c9e14a026dcf",
    measurementId: "G-JMKX4PH2JJ"
   };
   admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'dashbord-ede80',
});

const db = admin.firestore();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Créer un utilisateur
app.post('/SignUp', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await admin.auth().createUser({ email, password });
      res.status(201).json({ uid: user.uid });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la création de l\'utilisateur');
    }
  });
  
  // Connecter un utilisateur
  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await admin.auth().signInWithEmailAndPassword(email, password);
      res.json({ uid: user.user.uid });
    } catch (error) {
      console.error(error);
      res.status(401).send('Identifiants incorrects');
    }
  });
  // Ajouter un objet
app.post('/index', async (req, res) => {
    try {
      const { uid, serialNumber, name, sensorType } = req.body;
      const objectRef = db.collection('objects').doc(serialNumber);
      await objectRef.set({ uid, serialNumber, name, sensorType });
      res.status(201).send('Objet ajouté avec succès');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de l\'ajout de l\'objet');
    }
  });
  
  // Modifier un objet
  app.put('/api/updateObject/:serialNumber', async (req, res) => {
    try {
      const { uid, name, sensorType } = req.body;
      const serialNumber = req.params.serialNumber;
      const objectRef = db.collection('objects').doc(serialNumber);
      await objectRef.update({ uid, name, sensorType });
      res.send('Objet mis à jour avec succès');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur lors de la mise à jour de l\'objet');
    }
  });
  