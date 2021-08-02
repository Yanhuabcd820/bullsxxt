const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
// const hbshelpers = require('handlebars-helpers')()
const trash = require('./trash.js')
// 奇怪

const bodyParser = require('body-parser')
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))



app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  // res.send(`this is bullsxxt web`)
  res.render('index')
})
app.post('/', (req, res) => {
  const targetQuery = req.body.target
  const sentence = trash(targetQuery)

  console.log('targetQuery', targetQuery)
  res.render('index', { targetQuery, sentence })

})

app.listen(port, () => {
  console.log(`web run on http://localhost:${port}`)
})