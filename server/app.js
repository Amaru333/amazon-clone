const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const users = require('./models/users');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');

app.use(cors());
app.use(bodyParser.json());

mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('Connected to the database'));

app.post('/createUser', async (req,res) => {

    //Checking duplicate mail
    const mailExist = await users.findOne({mail: req.body.mail});
    if (mailExist) return res.status(400).send('Email already exists')
    //Checking duplicate mobile number
    const mobileExist = await users.findOne({mobile: req.body.mobile});
    if (mobileExist) return res.status(400).send('Mobile already exists')
    //Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    //Sending the data to database
    const user = new users({
        name: req.body.name,
        mail: req.body.mail,
        mobile: req.body.mobile,
        password: hashPassword
    });
    try {
        const saveUser = await user.save();
    } catch (err) {
        res.status(400).send(err);
    }
});

app.listen(3001);