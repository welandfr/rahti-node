const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    res.json({'msg': 'Test-route works with GET (try POST too!)'})
})

router.post('/', async (req, res) => {
    try {
        res.json({msg: 'Test-route works with POST',
        reqBody: req.body })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

module.exports = router