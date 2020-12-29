const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const users = require('./models/users');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('Connected to the database'));

app.post('/createUser', (req,res) => {
    const user = new users({
        name: req.body.name,
        mail: req.body.mail,
        mobile: req.body.mobile,
        password: req.body.password
    })

    user.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({ message:err });
    });
});

app.listen(3001);