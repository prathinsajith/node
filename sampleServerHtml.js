var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function (req, res) {

    var urlPath = url.parse(req.url,true)
    // console.log(urlPath.pathname)

    if (urlPath.pathname === '/') {
        fs.readFile('samplehtml.html', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data)
            res.end()
        })
    } else if (urlPath.pathname === '/login') {
        fs.readFile('login.html', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            res.write(data)
            res.end()
        })
    } else if (urlPath.pathname === '/signup') {
        console.log(urlPath.query)
        res.write('<h1> Welcome ' + urlPath.query.uname + '</h1>')
        res.end()
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        })
        // res.write(error)
        res.end()
    }
}).listen(9000)