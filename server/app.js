const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const users = require("./models/users");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const Joi = require("@hapi/joi");

//Registration form validation
const validationSchema = Joi.object({
  name: Joi.string().min(2).required(),
  mail: Joi.string().min(2).required().email(),
  mobile: Joi.number().required(),
  password: Joi.string().min(6).required(),
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userID",
    secret: "nevergonnagiveuup",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24 * 3,
    },
  })
);

app.use(bodyParser.json());

mongoose.set("useUnifiedTopology", true);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to the database")
);

//Sending the registered user details to the database
app.post("/createUser", async (req, res) => {
  const validation = validationSchema.validate(req.body);
  //Checking duplicate mail
  const mailExist = await users.findOne({ mail: req.body.mail });
  if (mailExist) return res.send({ errMessage: "Email already exists" });
  //Checking duplicate mobile number
  const mobileExist = await users.findOne({ mobile: req.body.mobile });
  if (mobileExist) return res.send({ errMessage: "Mobile already exists" });
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
    password: hashPassword,
  });
  try {
    const saveUser = await user.save();
  } catch (err) {
    res.send(err);
  }
});

app.get("/login", (req, res) => {
  if (req.session.userSession) {
    res.send({ loggedIn: true, userSession: req.session.userSession });
  } else {
    res.send({ loggedIn: false });
  }
});
//test
//Logging in to the website
app.post("/login", async (req, res) => {
  //Checking if the mail exists
  const user = await users.findOne({ mail: req.body.mail });
  if (!user)
    return res.send({
      message: "Error: The provided email is incorrect. Please check again.",
    });
  //Checking if the password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.send({
      message: "Error: The provided password is incorrect. Please check again.",
    });
  try {
    req.session.userSession = user;
    console.log(req.session.userSession);
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

app.post("/addAddress", async (req, res) => {
  if (req.body.houseNo == "")
    return res.send({ errMessage: "Please enter your house no." });
  if (req.body.addressLine1 == "")
    return res.send({ errMessage: "Please enter address line 1" });
  if (req.body.addressLine2 == "")
    return res.send({ errMessage: "Please enter address line 2" });
  if (req.body.city == "")
    return res.send({ errMessage: "Please enter your city" });
  if (req.body.stateName == "")
    return res.send({ errMessage: "Please enter your state" });
  if (req.body.pincode == "")
    return res.send({ errMessage: "Please enter your pincode" });

  let userAddr = {
    houseNo: req.body.houseNo,
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    city: req.body.city,
    state: req.body.stateName,
    pincode: req.body.pincode,
  };

  let userRes = await users.findById(req.body.id);

  userRes.address.push(userAddr);

  try {
    const updateUserAddress = await userRes.save();
    res.send({ successMessage: "Address added successfully" });
  } catch (err) {
    res.send(err);
  }
  // await userRes.save();
});

app.get("/getAddress/:id", async (req, res) => {
  const user = await users.findOne({
    _id: req.params.id,
  });
  if (!user) return res.send({ count: 0 });
  try {
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

app.post("/deleteAddress", async (req, res) => {
  let userRes = await users.findById(req.body.userID);

  userRes.address.pull({ _id: req.body.addID });
  try {
    const updateUserAddress = await userRes.save();
    res.send({ successMessage: "Address added successfully" });
  } catch (err) {
    res.send(err);
  }
});

app.post("/updateUser", async (req, res) => {
  // const validation = validationSchema.validate(req.body);
  //Checking duplicate mail
  // const mailExist = await users.findOne({ mail: req.body.mail });
  // if (mailExist) return res.send({ errMessage: "Email already exists" });
  // //Checking duplicate mobile number
  // const mobileExist = await users.findOne({ mobile: req.body.mobile });
  // if (mobileExist) return res.send({ errMessage: "Mobile already exists" });
  //Validating the user
  // res.send(validation);
  //Hashing the password

  const user = await users.findOne({ _id: req.body.id });
  const validPassword = await bcrypt.compare(
    req.body.oldPassword,
    user.password
  );
  if (!validPassword)
    return res.send({
      message: "Error: Your old password is incorrect. Please check again.",
    });
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  var _id = req.body.id;
  var userUpdate = {
    name: req.body.name,
    mail: req.body.mail,
    mobile: req.body.mobile,
    password: hashPassword,
  };
  users.findByIdAndUpdate(
    _id,
    userUpdate,
    { new: true },
    function (err, userUpdate) {
      if (err) {
        console.log("err", err);
        res.send(errMessage);
      } else {
        res.send(userUpdate);
      }
    }
  );
});

app.listen(3001);
