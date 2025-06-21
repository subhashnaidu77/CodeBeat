
// function fun()
// {
// return new Promise((resolve)=>{
// setTimeout(()=>{
// resolve("Data received" );
// },5000);
// });


// }
// async function load(){
// console.log("data is loading");
// const data = await  fun();
// console.log(data);
// }

// load();

// function getUser(isuser){
// return new Promise ((resolve,reject )=>{
// setTimeout(()=>{
// if(isuser){
// resolve("user is online ")}
// else{
// reject("is ofline ");
// }

// },2000);

// });
// }

// async function checking(){
// try{
// const msg = await getUser(true);
// console.log(msg);
// }
// catch(error){
// console.log(error);
// }

// }

// checking();



// const mydata = {
// "name": "Subhash",
// "age":25,
// "skills": ["c","javascript", "react" , "node" , "java" , "mongo "]
// };

// const jsonString = JSON.stringify(mydata);
// console.log(jsonString);



// const jsonstring ='{"name": "Subhash","age":25}';
// const jsonobj = JSON.parse(jsonstring);
// console.log(jsonobj.name); 


const mydata ={
    "name": "Subhash",
    "age": 25,
    "skills": ["c", "javascript", "react", "node", "java", "mongo"]
};
const data =  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET"
    // body: JSON.stringify(mydata)
});
// console.log(data);
data.then((response) => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
}).then((jsonData) => {
    console.log(jsonData);
}).catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
});