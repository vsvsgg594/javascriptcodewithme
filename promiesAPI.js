let p1=new Promise((reslover,reject)=>{
    setTimeout(()=>{
        console.log("vlaue 1");
        // reject(new Error("ne error"));
    },1000);

});
let p2=new Promise((reslover,reject)=>{
    setTimeout(()=>{
        console.log("value 2");
    },2000);

});
let p3=new Promise((reslover,reject)=>{
    setTimeout(()=>{
        console.log("value 3");
    },3000);
});
// let promises_all=Promise.all([p1,p2,p3]);
// promises_all.then(()=>{
//     console.log(value);
// });
// let promiess_all=Promise.all();
// promiess_all.then((value)=>{
//     console.log(value)
// })
// let promiess_all=Promise.race([p1,p2,p3]);
// promiess_all.then((value)=>{
//     console.log(value);
// })

let promiess_all=Promise.any([p1,p2,p3]);
promiess_all.then((value)=>{
    console.log(value);
})