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