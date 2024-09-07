const beforeDate = new Date();
const beofreTimeInMs = beforeDate.getTime();
var a =  0;
for(i=0;i<100000000;i++){
    a+=i;
}
console.log(a)
const newDate = new Date();
const afetTiemeInMs = newDate.getTime();

console.log(afetTiemeInMs-beofreTimeInMs)
