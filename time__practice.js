// date=new Date();
// console.log(date);
// document.write(date);
// // document.body.style.background="blue";
// document.body.style.border="2px solid blue";
// console.log(document.location)
// console.log(document.documentURI)
let age=prompt("enter the age :");
age=Number.parseInt(age);

if(age>=18){
    document.body.style.background="green";
    document.body.style.color="yellow";
}else{
    document.body.style.background="red";
    document.body.style.color="blue";
}