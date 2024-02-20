// variable is containe that can contains the data//
// There are three type of varible in javascript//
//var let const//
var a=10;
console.log(a);
//var have global scope which can be updated anywhere from program//
var a=20;

console.log(a);
// that is reason to less use the var variable//
// let has block level scopre it can be update but cannot redeclare
let c=10;
console.log("c :" + c);
c=20;
console.log("c : "+c);
// let c=30;// we cannot redeclare the let varible
// console.log("c : "+c);
let d;
console.log("d" + d)
const c1=10;
console.log("c1 "+ c1);
// c1=20; we cqannot update and redeclare the const variable
// console.log(c1);