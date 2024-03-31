const express = require('express')
const router = express.Router()

router.get('/home', (req, res) => {
    res.send('Welcome to the home page')
})

router.get('/search', (req, res) => {
    res.send('Welcome to the search page')
})

module.exports = router