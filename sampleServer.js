var http =require('http')
 
http.createServer(server).listen(4000)

function server(req,res){
    res.write('PrathinSajith')
    res.end()
}

http.createServer(function(req,res){
    res.write('Prathin Sajith')
    res.end()
}).listen(3000)

