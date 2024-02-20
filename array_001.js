console.log("heloo arrays");
let obj=[1,2,3,"vikash",false];
console.log(obj[2]);
obj[2]=990;
console.log(obj);
console.log(obj.length);
console.log(typeof(obj));
let a=[1,2,3,4,5,6,7];
console.log(a);
let b=a.toString();
console.log(typeof(a));
console.log(typeof(b));
let c=a.join("vikash");
console.log(c);
let p1=a.pop();
console.log(a);
let p2=a.push(900);
console.log(a);
let d=a.shift();
console.log(d);
console.log(a.unshift());
let s=[1,2,3,4,5];
s.forEach((element)=>{
    console.log(element*element);
})
console.log("addition of aaryas")
s.forEach((e)=>{
    console.log(e+e);
})