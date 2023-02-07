// Node.js Code
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const send = require("../Mail/send")
// User Model
const User = require("../Models/users");

// Order Model
const Order = require("../Models/order");



router.post("/", (req, res) => {
    console.log(req.body)
    const {username,email,shippingaddress} = req.body
    const user = new User({
        username: username,
        email:email,
        shippingaddress:shippingaddress
    })
    user.save(function (err, res) {
        if (err) { throw err; }
        console.log('test me', res)
    })
 
    send({
        username,
        email,
        shippingaddress
    })
    
   return res.status(200).send({ user })
  });





router.get("/", (req, res) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get a specific user data
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get order data for a specific user
router.get("/:id/orders", (req, res) => {
  Order.find({ userId: req.params.id })
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
