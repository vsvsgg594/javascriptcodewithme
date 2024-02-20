
let btn=document.getElementById("id")
let i=0;
let x=btn.addEventListener('click',function(e){
    console.log(e.target);
    console.log("clicked btn");
    console.log(i++);
    if(i==5){


       document.getElementById("id").disabled =true;
       btn.style.background="red";
       btn.style.color="white";
       btn.style.border="none";
       btn.style.cursor="pointer";
    }
    // alert("hello");
    
})
// let y=btn.addEventListener('click',function(e){
//     alert("hello1");

// })
// let a=prompt("whta us your favouir number :");
// if(a=="2"){
//     btn.removeEventListener('click',y);

    

// }