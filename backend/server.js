const express = require('express');
const app = express();

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});