// function hello(name,callback){
// console.log("hello"+ name);
// callback();

// }

// function back(){
// console.log("hi");
// }



// hello("pranav",back);


// console.log("opera start");
// setTimeout(()=>{
// console.log("Delayed one ")
// },2000);

// console.log("End"); 




// setTimeout(()=>{
// console.log("step1");
// setTimeout(()=>{
// console.log("Step2");
// setTimeout(()=>{
// console.log("Step3");
// },1000);
// },1000);

// },1000);

// const my= new Promise((resolve,reject)=>{
// let success = true;
// if(success){
// resolve("issue resolved ")}
// else{
// reject("issue not resolved")
// }
// });
// my.then((mes)=>{
// console.log("Success:",mes);
// })
// .catch((error)=>{
// console.log("error",mes)});

// function S1(){
// return new Promise((resolve)=>{

// setTimeout(()=>{

// console.log("Step1 done ");
// resolve("Recieved from s1 and it is complete");

// },2000);
// });
// }

// function S2(data){
// return new Promise((resolve)=>{

// setTimeout(()=>{

// console.log("Step2 done",data);
// resolve("Recieved from s2 adn s2 is complete");

// },2000);
// });}

// S1().then(S2).then((msg)=>{
// console.log("Final deal",msg);
// });


// function hi(msg,time){
// return new Promise((resolve)=>{
// setTimeout(()=>{
// console.log(msg);
// resolve();
// },time);

// });
// }
// hi("s1",1000).then(()=>hi("s2",1000))
// .then(()=>hi("s3",1000)); 

// const my =  Promise.resolve("1st operation");

// const your =  Promise.resolve("2nd one");

// Promise.all([my,your]).then((res)=>{
// console.log(res);})

const  first = new Promise((resolve)=>setTimeout(resolve,2000,"first operation"));
const second = new Promise((resolve)=>setTimeout(resolve,3000,"second operation"));

Promise.race([first,second]).then((result)=>{

console.log("race completyed ")});