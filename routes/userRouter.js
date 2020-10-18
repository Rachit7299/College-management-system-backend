var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var express = require('express');
var Users = require('../models/users');
const config = require('../config');
const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.route("/register").post((req, res, next) => {
    password= req.body.pswd;
    bcrypt.hash(password, 10, (err, hash) => {
      Users
      .create({
        username:req.body.name.toLowerCase().slice(0, 4).trim() + req.body.mobile.toString().slice(0, 4),
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        privilege: req.body.privilege,
        dept: req.body.dept,
        pswd: hash,
      }).then((user) => {
        res.status(200).json({ status: "Registration Successful!"});
      }).catch((err) => {
        if (err.code === 11000)
          res.status(409).json({ status: "Duplicate Entry Found" });
        else res.status(500).json({ status: "Internal Server" });
      });
    },(err)=>next(err)) 
  
  });

  module.exports=userRouter;