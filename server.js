const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8080

console.log(`Node.js ${process.version} dotenv: ${process.env.ENV_VAR}`)

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ msg: "It works.", 
    foo: process.env.FOO || 'nope', 
    bar: process.env.BAR || 'nope' })
})

const testRouter = require('./routes/testRoute')
app.use('/test-route', testRouter)

app.listen(PORT, () => {
    try {
        console.log(`Running on port ${PORT}`)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    
})