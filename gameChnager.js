let  b=true;
while(b){
    setTimeout(()=>{
        document.body.style.background="red";
    },1000);
    setInterval(()=>{
        document.body.style.background="blue";
    },2000);
}
