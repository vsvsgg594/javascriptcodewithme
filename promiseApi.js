//promises.all()
let p1=new Promise((reslover,reject)=>{
    setTimeout(()=>{
        reject(new Error("error"));
        // console.log("value 1");
    },1000);
});
let p2=new Promise((reslover,reject)=>{
    setTimeout(()=>{
        console.log("vallue 2");
    },2000);
});
let p3=new Promise((reslover,reject)=>{
    setTimeout(()=>{
        console.log("vallue 3");
    },1000);
});

// let promiess_all=Promise.all([p1,p2,p3]);
//  promiess_all.then((value)=>{
//      console.log(value);
//  })
let promiess_all=Promise.allSettled([p1,p2,p3]);
   promiess_all.then((value)=>{
       console.log(value);
})
//  let promiess_all=Promise.race([p1,p2,p3]);
//   promiess_all.then((value)=>{
//       console.log(value);
//   })
// let promiess_all=Promise.any([p1,p2,p3]);
// promiess_all.then((value)=>{
//     console.log(value);
// })