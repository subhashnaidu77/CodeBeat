const http = require('http');
const url = require('url');
// const server = http.createServer((req,res)=>{

// //starting point means i am setting up the server or creation 
// res.writeHead(200,{'Content-Type':'text/plain'});

// //end it 
// res.end('this is from Node js server')


// });

// //create port number 
// server.listen(3000,()=>{
// console.log('server is running at http://localhost:3000')});


// --------------Routing Example-----------------

// const server = http.createServer((req,res)=>{
// if(req.url==='/'){
// res.write('home page ');}
// else if(req.url==='/about'){
// res.write('about page ')}
// else{
// res.writeHead(404)
// res.write('Page not found')
// }
// res.end();
// });

// ----Handle requests 
// const server = http.createServer((req,res)=>{
// if(req.method === 'GET'&&req.url==='/')
// {
// res.end('GET EQUEST IS ON HOME PAGE ');}

// else if(req.method==='POST'&& req.url==='/data'){

// let body = '';
// req.on('data',chunk=>{
// body +=chunk;
// });
// req.on('end',()=>{
// console.log('please post some data ', body);
// res.end('Data recieved');

// });
// }
// else{

// res.end('Diffferent Routing ');
// }

// });

// const server = http.createServer((req,res)=>{

// const data = {
// name: 'Subhash',
// age: '26'
// };
// res.writeHead(200,{'Content-Type':'application/json'});
// res.end(JSON.stringify(data))

// });


// const  myurl = url.parse('http://localhost:3000/poduct?&name=mobile',true);
// console.log(myurl.pathname);
// console.log(myurl.query);





// server.listen(3000,()=>{
//  console.log('server is running at http://localhost:3000')})


http.createServer((req,res)=>{
const parseurl = url.parse(req.url,true);


if(parseurl.pathname==='/hello'){
const name  = parseurl.query.name||'STUDENT';
res.writeHead(200,{'Content-Type':'text/plain'});


res.end(`hello,${name}!`);


}
else{
res.writeHead(404);
res.end('page ot found ');
}


}).listen(3000,()=>{
console.log('server url is http://localhost:3000')}

);