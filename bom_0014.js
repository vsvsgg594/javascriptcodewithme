console.log("hello");
document.write("hey");
document.write(1+2);

let d=document.getElementsByClassName("main")[0];
let btn=document.getElementById("btn");
btn.onclick=()=>{
    d.style.background="red";
    d.innerText="heo";
    d.style.display="none";
    d.innerHTML="<div>hello</div>";


}
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
btn1.onclick=()=>{

d.style.display="flex";
d.style.background="pink";
d.style.innerText="click2"

}