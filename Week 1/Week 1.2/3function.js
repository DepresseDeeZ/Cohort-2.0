//Functions

// //example
// function sum(a,b){
//     const ans = a+b;
//     return ans;
// }
// console.log(sum(2,3)) //5



// //CALLBACK fUNCITON
// function sum(num1, num2 ,fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("using displayresult Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("using displayresultPassive Sum's result is : " + data);
// }
// sum(1,3,displayResult);
// sum(1,3,displayResultPassive);
// // You are only allowed to call one function after this
// // How will you displayResult of a sum


// //fucntion as a argument
// const calcualteArithmetic = (a,b,type)=>{
//    const ans = type(a,b);
//    return ans
// }
// function sum(a,b){
//     return `summation of a + b = ${a+b}`;
// }
// function sup(a,b){
//     return `subtraction of a - b = ${a-b}`;
// }

// const value = calcualteArithmetic(2,4,sum);
// console.log(value);
// const value1 = calcualteArithmetic(2,4,sup);
// console.log(value1);


// //setTimeout
// setTimeout(()=>{
//     greet();
//     console.log("HEllo world");
// },2000)
// //print the statement after 2 seconds

// function greet(){
//     console.log("Good afternoon")
// }





