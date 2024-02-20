console.log("this is operator js");
// There are many types of operator in js
/*
1.aritimatics operator
2.comparison operator
3.logical operator
4.assignment operator
5.bitwise operator

*/
let a=10;
console.log(a);//10
console.log(a++);//10
console.log(a);//11
console.log(++a);//12
console.log(a);//12
let b=20;
console.log(++b + b++ +a++ );//b=++b=20+1=21+21=42 update b=22 ans 52
if(b){
    console.log(b);
}
if(a!=0){
    for(let i=0;i<10;i++){
        console.log(i);
    }
}
if(b>20 && a<20){
    alert("permission granted")
}
// while(b!=a){
//     prompt("hello");
//     a++;
// }

console.log(a**2);