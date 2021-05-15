const express = require('express')
const actions = require('../methods/action')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})
router.post('/adduser',actions.addNew)
router.post('/authenticate',actions.authenticate)
router.get('/getinfo',actions.getinfo)


module.exports = router