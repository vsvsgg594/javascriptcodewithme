console.log("loops ");
//types of loops
/*
for loop
for in loop
for of loops
while
do -while
*/
//  for loop
for(let i=0;i<10;i++){
    console.log(i);
}
const obj={
    harry:30,
    vikash:33,
    raju:34
}
for(let a in obj){
    // console.log(a);
    console.log("marks of "+ a + obj[a]);
    // if(a=="vikash"){
    //     console.log("vikash "+obj.vikash);
    // }
}
for(let b of "vikash"){
    console.log(b)
}

let n=prompt["enter a number "]
n=Number.parseInt(n);
let i=0;
while(i<n){
    console.log(n);
    i++;
}

