var express = require('express');
var userRepo = require('../repos/userRepo');
var router = express.Router();

router.post('/register', (req, res) => {
    userRepo.register(u)
        .then(value => {
            //
        })
        .catch(err => {
            //
        })
})

router.post('/login', (req, res) => {
    userRepo.login(u)
        .then(value => {
            //
        })
        .catch(err => {
            //
        })
})

module.exports = router;