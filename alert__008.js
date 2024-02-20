alert("your alert is worked");
let a=prompt("enter your name")

let b=prompt("enter your password");

if(a=="vikash" && b=="password"){
    document.write("your name"+a +"and "+" password is"+b);

}

let c=confirm("do you want to exits");
if(c==true){
    document.close();
}else{
    document.write("welcome again");
}

