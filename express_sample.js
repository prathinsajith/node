const express = require('express')
const path = require('path')
const {
    nextTick
} = require('process')

const app = express()

app.use((req, res, next) => {
    console.log('Hello Everyone')
    next()
})

app.get('/', function (req, res) {
    res.send('Hello....')
})

app.get('/signup', (req, res) =>
    res.sendFile(path.join(__dirname, 'login.html'))
)
app.post('/signup', (req, res) =>
    res.send('<h1>hello ...</h1>')
)


app.get('/about', (req, res) =>
    res.send('about')
)

app.listen(3000, function () {
    console.log(__filename)
    console.log('Server Started')
})