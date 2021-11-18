const express = require('express')
const cors = require('cors')
const PORT = 3005;
const app = express()
const session = require('express-session');


const router = require('./router')
const db = require('./models')
const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());

app.use(
  session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: '123',
    cookie: {
      maxAge: 2678400000, // 31 days
      sameSite: true,
      httpOnly: false,
      secure: false,
    },
  })
);

app.use(router);
app.get('*', (req, res) => {
  res.status(404).send('Sorry, page not found');
});

(async function() {
  try {
    await db;
    app.listen(PORT, () => {
      console.log('server is running on port 3005')
    })
  } catch (error) {
    console.log(error)
  }
})();