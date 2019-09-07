const express = require('express');
const router = express.Router();
const DBRef = require('../database/connectdb');
const Rootref = DBRef.database().ref();
const User = Rootref.child('Users');

//  @route:   POST /post
//  @desc:    Create a new User
//  @access:  Public
router.post('/signup', async (req, res) => {
  const { fname, lname, age, location } = req.body;
  const userData = { fname, lname, age, location };
  try {
    const newUser = await User.push(userData);
    newUser.once('value', snap => {
      console.log(snap.key);
    });
    res.status(200).send(`User Updated Successfully...`);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

//  @route:   GET/readall
//  @desc:    Read a new user
//  @access:  Public

router.get('/readall', async (req, res) => {
  try {
    const userRef = await User.once('value');
    const users = [];
    userRef.forEach(user => {
      users.push({
        id: user.key,
        ...user.val()
      });
    });
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
