const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.writeHead(200,{'Content-type': 'plain/text'});
        res.end('Sarumi Abdulkarim');
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/plain'});
        res.end('Content not found');
    }


});	

server.listen(8900, 'localhost', () => {
    console.log('Server is running on this port');
});