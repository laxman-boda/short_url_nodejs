const express = require('express')

const app = express()

const PORT = 8001;

app.listen(PORT,(req,res) => {
    console.log(`Connected to Port ${PORT}`)
})
