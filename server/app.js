const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const users = require('./models/users');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const Joi = require('@hapi/joi');

//Registration form validation
const validationSchema = Joi.object({
    name: Joi.string().min(2).required(),
    mail: Joi.string().min(2).required().email(),
    mobile: Joi.number().required(),
    password: Joi.string().min(6).required()
})

app.use(cors());
app.use(bodyParser.json());

mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('Connected to the database'));

//Sending the registered user details to the database
app.post('/createUser', async (req,res) => {
    const validation = validationSchema.validate(req.body);
    //Checking duplicate mail
    const mailExist = await users.findOne({mail: req.body.mail});
    if (mailExist) return res.send({ errMessage: 'Email already exists' })
    //Checking duplicate mobile number
    const mobileExist = await users.findOne({mobile: req.body.mobile});
    if (mobileExist) return res.send({ errMessage: 'Mobile already exists' })
    //Validating the user
    res.send(validation);
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
        res.send(err);
    };
});

//Logging in to the website
app.post('/login', async (req,res) => {
    //Checking if the mail exists
    const user = await users.findOne({ mail: req.body.mail });
    if (!user) return res.send({ message: "Error: The provided email is incorrect. Please check again." });
    //Checking if the password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.send({ message: "Error: The provided password is incorrect. Please check again." });
    try {
        const loginUser = await res.send(user._id);
    } catch (err) {
        res.send(err);
    };
});

app.listen(3001);