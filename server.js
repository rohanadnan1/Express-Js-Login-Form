const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./user_route')

const app = express()
const PORT = 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(__dirname))
app.use(router)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})