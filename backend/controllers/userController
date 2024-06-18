
import { initializeApp } from "firebase/app";

const {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyBhDCts-ZweY4Yl5AJirMs67iqT9Ahph-I",
  authDomain: "examen2ux-1ebb4.firebaseapp.com",
  projectId: "examen2ux-1ebb4",
  storageBucket: "examen2ux-1ebb4.appspot.com",
  messagingSenderId: "754860114465",
  appId: "1:754860114465:web:cb6215e1ddded34232d960",
  measurementId: "G-R747WT192L"
};

const app = initializeApp(firebaseConfig);

const registerUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        res.status(200).send({
          msg: "Usuario creado exitosamente",
          data: userCredential,
        });
      })
      .catch((error) => {
        res.status(500).send({
          msg: "No se pudo crear el usuario",
          data: error.message,
        });
      });
  };

  const loginUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        res.status(200).send({
          msg: "Usuario inició sesión exitosamente",
          data: {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            token1: userCredential.user.stsTokenManager.refreshToken,
            token2: userCredential.user.stsTokenManager.accessToken,
          },
        });
      })
      .catch((error) => {
        res.status(500).send({
          msg: "Credenciales incorrectas",
          data: error.message,
        });
      });
  };
  const logoutUser = (req, res) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        res.status(200).send({
          msg: "Usuario cerró sesión exitosamente",
        });
      })
      .catch((error) => {
        res.status(500).send({
          msg: "Error Log out",
          data: error.message,
        });
      });
  };
  
  module.exports = {
    registerUser,
    loginUser,
    logoutUser,
  };