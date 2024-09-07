// //before promises


// const fs = require('fs');

// // my own asynchronous function
// function kiratsReadFile(cb) {
//   fs.readFile("a.txt", "utf-8", function(err, data) {
//     cb(data);
//   });
// }

// function onDone(data) {
//   console.log(data)
// }

// kiratsReadFile(onDone)




// //tnext useing promises 
// const fs = require('fs');

// // my own asynchronous function
// function kiratsReadFile() {
//   return new Promise(function(resolve) {
//     fs.readFile("a.txt", "utf-8", function(err, data) {
//       resolve(data);
//     });
//   })
// }

// // callback function to call
// function onDone(data) {
//   console.log(data)
// }

// kiratsReadFile().then(onDone);



// //promises 
// let p =new Promise(function(resolve){
//     setTimeout(() => {
//         resolve("hello wolrd");
//     }, 1000);

// });
// function callback(d){
//     console.log(d)
// }
// p.then(callback)


function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      resolve("hi there");
    });
    return p;
  }
  
  const value = kiratsAsyncFunction();
  value.then(function(data) {
    console.log(data);
  })