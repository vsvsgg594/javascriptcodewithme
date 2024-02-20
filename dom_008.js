document.write("this is dom");
let age=prompt("Enter the number :");
age=Number.parseInt(age);
if(age>=18){
    document.write("yes you can ");
    document.body.style.background="blue";
    document.body.style.color="red";
    document.write(document.location);
    document.body.innerHTML="<div><h1>hello</h1></div>"
}else{
    document.write("yes you can't ");
    document.body.style.background="red";
    document.body.style.color="blue";
    document.write(document.onload())
}
document.close();