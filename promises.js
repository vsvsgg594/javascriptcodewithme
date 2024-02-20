// let promises=new Promise(function(resolve,reject){
//     resolve();
//     reject();



// // })

// function myDisplayer(some){
//     document.getElementById("demo").innerHTML=some;
// }

// let promises=new Promise(function(myResolver,myRejecrt){
//     let x=0;
//     if(x==0){
//         myResolver("ok");
//     }else{
//         myRejecrt("Error");
//     }
// });
// promises.then(
//     function(value)
//     {myDisplayer(value);},
//     function(error)
//     {
//         myDisplayer(error);
//     }
// )
// console.log(promises)


let p1=new Promise(function(resolver,reject){
    alert("Promies is pending");
    setTimeout(()=>{
        resolver(1);

    },2000);

});
p1.then(()=>{
    console.log("congrutaion");
})


p1.then(()=>{
    console.log("hurry");
    
    setTimeout(()=>{
        document.body.style.background="red";
        setTimeout(()=>{
            document.body.style.background="blue";
            setTimeout(()=>{
                document.body.style.background="skyblue";
            },4000);
        },3000);
    },5000);
   
});
