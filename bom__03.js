console.log("hello bom");
// let a=document.getElementsByClassName("container")[0];
// // a.onclick=()=>{

// //     document.body.style.background="red";
// //     console.log("clicked");
// // }
// let b=document.getElementById("id");
// b.onclick=()=>{
//     let d=document.body.style.background="red";
//     console.log(d);
// //
// document.getElementById('id').onclick=()=>{
//     console.log("h");
// 
// document.getEleme}
let d=document.getElementById("btn");
d.onclick=()=>{

    d.innerHTML=Date.now();
    // d.getFullYear();
    d.style.background="red";
    d.style.color="white";
    document.body.style.background="blue";
    document.body.style.border="2px solid red";
}
let c=document.getElementsByClassName("container");
c.mouseover=()=>{
    console.log("mouse over function");

}

let btn1=document.getElementById("btn1");
btn1.mouseover=()=>{
    document.body.style.background="pink";
}