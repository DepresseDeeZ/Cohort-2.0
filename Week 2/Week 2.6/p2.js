//Filter

//what if i tell you , given an input array give me back all the  even values from it

//solved using default 
const newArray = [];
const input = [1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<input.length;i++){
    if(input[i]%2==0){
        newArray.push(input[i])
    }
}
console.log(newArray)


//now using filter
function evenNum(i){
    if(i%2==0){
        return i;
    }
}
console.log("using filter with known function")
const ans = input.filter(evenNum)
console.log(ans)


console.log("usign annoymous fucntion");

const an = input.filter((i)=>{
    if (i%2==0){
        return i
    }
})

console.log(an)

//another test case

const arr  =["harkirat","umang","raj","usha"];

const a = arr.filter((i)=>{
    if(i.startsWith('u')){
        return true
    }else{
        return false
    }
})

console.log(a)
