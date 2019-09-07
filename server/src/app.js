const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Application is running...');
});

app.use(express.json({ extended: false }));

app.use('/user', require('../routes/user'));

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
