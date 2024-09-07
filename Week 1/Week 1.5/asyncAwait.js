//promise
// function kiratsAsyncFunction() {
//     let p = new Promise(function(resolve) {
//       // do some async logic here
//       resolve("hi there!")
//     });
//     return p;
//   }
  
//   function main() {
//     kiratsAsyncFunction().then(function(value) {
//         console.log(value);
//     });
//   }
  
//   main();


//asyncs await

function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      // do some async logic here
      setTimeout(() => {
        resolve("hi there!")
      }, 2000);
    });
    return p;
  }
  
  async function main() {
    const value = await kiratsAsyncFunction();
    console.log(value);
  }
  
  main();