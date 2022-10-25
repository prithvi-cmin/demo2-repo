const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    .button {
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }
    
    .button1 {background-color: #4CAF50;} /* Green */
    .button2 {background-color: #008CBA;} /* Blue */
    </style>
    </head>
    <body>
    
    <button class="button button1">Green</button>
    <button class="button button2">Blue</button>
    
    </body>
    </html>`)
})
 const p = app.listen(process.env.PORT || 5000)
 console.log(p)
module.exports = app