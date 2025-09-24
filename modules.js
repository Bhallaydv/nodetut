//  const fs = require('fs');
//  const os = require ('os');

//  fs.writeFileSync("dummy.txt", "trying with modules")


//  console.log(os.plateform);
//  console.log(os.hostname());
//  console.log(os.cpus());

const {log, warn}= require('console');



 console.log("abc");
 console.log(process.cwd());
 console.log(process.pid)
 log("custom log");
 warn("custom log");