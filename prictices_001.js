console.log("practice");
//question 1
//create a program to add string to number//
let s1="vikash";
let s2=789;
console.log(s1+s2);
console.log(typeof(s1+s2));
//question2
//create a const object and can it hold num
const a={
    name:"vikash",
    job:"software developer",

}
// a=34;
// console.log(a);
a['location']="pune";
console.log(a);
console.log(a.name);
//question 3 create a dictionay objects with 5 word

const dict={
    transmogrify:"to change in appearance or form, especially strangely or grotesquely; transform.",
    jollify:"to make or become jolly or merry.",
    perspicuity:"clearness or lucidity, as of a statement."


}
console.log(dict);
console.log(dict.transmogrify);
console.log(dict.transmogrify.toLocaleUpperCase);
console.log(dict.jollify.length);
console.log(dict.jollify.endsWith('h'));
if(dict.jollify.match("vikash")){
    console.log("match");
}else{
    console.log("not match");
}
let s=dict.jollify.replace("apple");
console.log(s);
console.log(dict);
console.log(dict.jollify.bold);
if(dict.jollify){
    console.log(dict.jollify);
}else{
    console.log("could not found");
}
