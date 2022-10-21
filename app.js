const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('<h1>HELLO WORLD</h1>')
})
 const p = app.listen(process.env.PORT || 5000)
 console.log(p)
module.exports = app