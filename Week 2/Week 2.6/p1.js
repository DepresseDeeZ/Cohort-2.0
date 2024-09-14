// given an arrau , give me back a new array in which every value is multiplied by 2

const input = [1,2,3,4,5];
const newArray = [];
for(let i=0;i<input.length;i++){
    newArray.push(input[i]*2);
}
console.log(newArray)

// other solution using Map
// function transform(i){
//     return i*2;
// }
// const n =input.map(transform);

//even better way
const m = input.map(function(i){
    return i*2;
})
console.log(m)

const n = input.map(i => i*2)
console.log(n)