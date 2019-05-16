const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001


app.use(express.static(__dirname + '/../public'))
app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


// app.get('/homes', (req, res) => {
//   res.send(req.body)
// }) 