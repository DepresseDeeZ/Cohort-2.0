function calculateArithmetic(a,b,funToCall){
    const ans = funToCall(a,b);
    return ans; 
}


function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const value =calculateArithmetic(1,2,sum);
console.log(value)