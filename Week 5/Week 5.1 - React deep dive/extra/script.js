function onPressbtn(){
    const currentValue  = document.getElementById("btn").innerHTML;
    console.log(currentValue.split(" "))
    const currentPointer = currentValue.split(" ")[1];
    var sum = parseInt(currentPointer)+1;
    document.getElementById("btn").innerHTML = "Counter "+sum;
}