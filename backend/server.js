const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authRoutes = require('../backend/routes/auth');
const postRoutes = require('../backend/routes/posts');
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

app.listen(port, () => console.log(`Server started on ${port}`));