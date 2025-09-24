// const http = require ("http");

const http = require('http');
const fs =require ('fs');

http.createServer((req, res)=>{
fs.readFile('html/Form.html', 'utf-8', (error, data)=>{
    if(error){
    res.writeHead(500, {"Content-Type": 'text/plain'})

        res.end('Internal server error');
        return;
    }

if(req.url=='/'){
    res.writeHead(200, {"Content-Type": "text/html"})

res.write(data)
}else if(req.url=='/submit'){
    res.write('<h1>Data Submitted</h1>')
}
res.end()

})

}).listen(3500);


// http.createServer((req,res)=>{
//     res.writeHead(200, {"Content-Type": "text/html"})

// console.log(req.url);


// if(req.url=='/'){
// res.write(`

// <form action="/submit" method="post">
//     <input type="text" placeholder="Enter name" name="name" />
//     <input type="text" placeholder="Enter email" name="email" />
//     <button>Submit</button>

// </form>
// `)
// }else if(req.url=='/submit'){
//     res.write('<h1>Data Submitted</h1>')
// }





// res.end();

// }).listen(3500);