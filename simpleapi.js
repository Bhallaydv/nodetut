const http = require('http');
const { json } = require('stream/consumers');
const usersData=[
    {
        name:'Manoj',
        age:'25',
        email:'hfaenrfa@getMaxListeners.com'
    },
     {
        name:'sahil',
        age:'20',
        email:'nrfa@getMaxListeners.com'
    },
     {
        name:'vikas',
        age:'26',
        email:'hfarfa@getMaxListeners.com'
    }

]

http.createServer((req, res)=>{
res.setHeader("Content-Type", "application/json")
res.write(JSON.stringify(usersData));
res.end();

}).listen(3000);