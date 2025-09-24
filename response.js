const http = require ('http');


const age=25;
const server= http.createServer((req, res)=>{
 
res.setHeader("Content-Type", "text/html");

 res.write(`
    <html>
    <head>
    <title>
Code step by step
    </title>
    </head>
    <body>
<h1>Hello Bhalla ydv</h1>
<h2>`+age+`</h2>
<h3>`+ new Date+`</h3>
    </body>
    </html>
    
    `)
    res.end();

})

server.listen(4900)