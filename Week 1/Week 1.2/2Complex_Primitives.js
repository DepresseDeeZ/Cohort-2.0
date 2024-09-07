// //arrays
// const personArray = ['umang','yash','raj'];
// console.log(personArray[0]);
// console.log(personArray[1]);
// console.log(personArray[2]);

// //print oddd and even number
// const age = [12,7,3,76,9];
// for(let i=0;i<age.length;i++){
//     if(age[i]%2==0){
//         console.log(`the number is even number ${age[i]}`);
//     }
//     else{
//         console.log(`the number is odd number ${age[i]}`);
//     }
// }

// //Obejcts
// const objects = {
//     personArray : ["yash","umang","raj"],
//     personAge :[ 21,21,20]
    
// }
// console.log(objects.personAge);
// console.log(objects.personArray)



// // 1. Write a program prints all the even numbers in an array 
// const age = [12,7,3,76,9];
// for(let i=0;i<age.length;i++){
//     if(age[i]%2==0){
//         console.log(age[i]);
//     }

// }



// //2. Write a program to print the biggest number in an arrya 

// const numArray = [1000,1,92,10,20,40,99];
// var temp =0;
// for (i=0;i<numArray.length;i++){
//     if(numArray[i]>temp){
//         temp =numArray[i];
//     }
// }
// console.log(temp)

// // 3. Write a program that prints all the male people’s first name given a complex object 

// const allUsers = [{
//     firstName: "Umang",
//     gender: 'Male'
// },
// {
//     firstName: "Yash",
//     gender: 'Male'
// },
// {
//     firstName: "Urvi",
//     gender: 'Female'
// },]

// for(let i=0;i<allUsers.length;i++){
//     if(allUsers[i]["gender"]=="Male"){
//         console.log(allUsers[i]["firstName"]);
//     }
// }

// hints

// use user["gender"] or user.gender 
//but dont user [gender] becuase it will try to find gender variable to replavce it with 

//else like this 
// const userArray = [{
//     firstName: "Umang",
//     gender: "Male"
// },{
//     firstName: "Yash",
//     gender: "Male"
// },{
//     firstName: "Urvi",
//     gender: "Female"
// },{
//     firstName: "Seema",
//     gender: "Female"
// },]

// for(i=0;i<userArray.length;i++){
//     if(userArray[i].gender == "Male"){
//         console.log(userArray[i].firstName)
//     }
// }


// // 4. Write a program that reverses all the elements of an array
// // Define an array
// let simpleArray = [1, 2, 3, 4, 5];
// let reverseArray = [];
// const n =simpleArray.length

// // Loop through the array and reverse it
// for (let i = 0; i < n; i++) {
//     var rev = simpleArray.pop();
//     reverseArray.push(rev);
// }

// console.log(reverseArray); // Output: [5, 4, 3, 2, 1]
