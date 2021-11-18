const express = require('express')
const user = require('./controllers/user.controllers');
const authMiddleware = require('./middlewares/auth');

const router = express.Router();

router.get('/user', user.getProfs);
router.post('/register', user.createUser);
router.post('/login', user.login);
router.get('/me', authMiddleware, user.profile);
router.post('/logout', authMiddleware, user.logout)



module.exports =router