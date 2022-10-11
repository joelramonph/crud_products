const express = require('express')


const { port } = require('./config.js')

const app = express()


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK!'})
})


app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})