const User = require('../models/user.models');

const getProfs = async(req, res) => {
  try {
    const users = await User.find({type: "prof"});
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const createUser = async(req, res) => {
  try {
    const { firstName, lastName, email, pw, image, type, city, profession, website, description, experience, education, appointmentIDs, creationDate, phone } = req.body;
    if (pw === '') throw new Error();
    const user = await User.create({firstName, lastName, email, pw, image, type, city, profession, website, description, experience, education, appointmentIDs, creationDate, phone});
    req.session.uid = user._id;
    res.status(201);
    res.send(user);
  } catch (error) {
    res.status(400).send({ error, message: 'Could not create user' });
  }
}

const login = async (req, res) => {
  try {
    const {email, pw } = req.body;
    const user = await User.findOne({email: email, pw: pw});
    req.session.uid = user._id;
    res.status(200).send(user);
  } catch (error) {
    res.status(401).send({error, message: 'Username or password incorrect'})
  }
}

const profile = async (req, res) => {
  try {
    const user = req.user
    res.status(200).send(user);
  } catch {
    res.status(404).send({ error, message: 'User not found' });
  }
};

const logout = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res
        .status(500)
        .send({ error, message: 'Could not log out, please try again' });
    } else {
      res.clearCookie('sid');
      res.sendStatus(200);
    }
  });
};



module.exports = {
  getProfs,
  createUser,
  login,
  profile,
  logout,
}