console.log("higer standard methodes");
//1.map=>create new array and return it
let arr=[45,23,11];
let a=arr.map((value,index,array)=>{
   
    return value+1;
  
})
console.log(a);

//2 filter //
let arr2=[45,23,21,0,9,3];
let a1=arr2.filter((a)=>
{
    return a<10;
})
console.log(a1);
let arr3=[1,2,3,4,5,6,7,8,86,5,4,3,32,,2,3,4,,5,6,67,7,8,8,8,8999,1123,3,34455,4,3,3,3,445,4,5,667,7,88]
let count=0;
let v1=arr3.filter((a)=>{
    count++;
    return a<50;
})
console.log(v1);
console.log(count);

//3.reduce
let arr4=[1,2,3,4,5];
let arr5=arr4.reduce((h1,h2)=>
{
    return h1+h2;
})
console.log(arr5);