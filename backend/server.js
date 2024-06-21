const express = require("express");
const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

app.listen(port, () => console.log(`Server started on ${port}`));
//Para utilizarlo en postman se tiene que hacer así:
//Firebase: http://127.0.0.1:8000/auth/logOut
//Mongo: http://127.0.0.1:8000/posts/listPosts
//También funciona con localhost en lugar de 127.0.0.1. Ej: http://localhost:8000/auth/createUser