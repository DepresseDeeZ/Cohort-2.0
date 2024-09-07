


// // setTimeout fucntion
// function fidnSum(n){
//     let ans =0;
//     for(i=0;i<n;i++){
//         ans+=i;
//     }
//     return ans;
// }
// function fidnSumtill100(){
//     console.log(fidnSum(100)) 
// }
// setTimeout(()=>{
//     fidnSumtill100()
// },1000)

// console.log("hello world")


//fs.readFile() 
const fs = require('fs'); //filesystem module

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("hello world");