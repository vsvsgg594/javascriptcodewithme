let plus=document.querySelector(".plus");
let minus=document.querySelector(".minus");
let num=document.querySelector(".num");
let a=0;

plus.addEventListener("click",()=>{
    a++;
    a=(a<10)?"0"+a:a;
    num.innerHTML=a;
    document.body.style.background="green";
    if(a>=10){
        document.body.style.background="blue";
    }
    if(a==0){
        document.body.style.background="pink";
    }
 
})
minus.addEventListener("click",()=>{
   if(a>0){
    a--;
    a=(a<10)?"0"+a:a;
    // console.log("a"+a);
    num.innerHTML=a;
    document.body.style.background="red";
   }
   if(a==0){
    document.body.style.background="pink";
}
 
});
