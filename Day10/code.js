// console.log("hello students ");

// console.log("platform is ready",process.platform);
// console.log("version ",process.version);
// console.log("args",process.argv);
// console.log(__dirname);
// console.log(__filename);

const hs = require('fs');

// hs.writeFile('code.txt','welcome to this tutorial',(err)=>{
//     if(err){
//         console.log("fileis not written",err);
//     }
// });


// hs.readFile('code.txt','utf8',(err,data)=>{
// if(err) throw err;
// console.log("the data present in the created file is ",data);
// })

hs.rename('code.txt','gun.txt',(err)=>{
if(err) throw err;
console.log("name of the fille is changed ")

})


