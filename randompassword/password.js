const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqurstuvwxyz";
const number="0123456789";
const symbol="@!#$%^&*(0+?><~";
const allChar=upperCase+lowerCase+number+symbol;
let lenght=12;
const inputBox=document.querySelector("#inputBox");
const generatorButton=document.querySelector(".generatorBtn");
const copyBtn=document.querySelector("#copyBtn");
function passwordGenerator(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(lenght>password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)];
    }
    inputBox.value=password;
    

}

copyBtn.addEventListener("click",()=>{
    inputBox.select();
    document.execCommand("copy");
  
})



generatorButton.addEventListener("click",passwordGenerator);
