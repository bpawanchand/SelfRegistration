const express = require('express');
const path = require('path');
const app = express();

app.use(express.json({ extended: false }));

app.use('/user', require('../routes/user'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
