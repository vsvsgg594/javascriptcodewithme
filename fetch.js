
console.log("fetch Api");
const URL="https://official-joke-api.appspot.com/random_joke";
const type=document.querySelector("#type");
const setup=document.querySelector("#setup");
const punchline=document.querySelector("#punchline");
const btn=document.querySelector("#btn");

const getData=async()=>{
    console.log("data fetching.......");
    let response=await fetch(URL);
    console.log(response);
    let data=await response.json();
    type.innerText=data.type;
    setup.innerText=data.setup;
    punchline.innerText=data.punchline;
   

    // console.log(data);
    // console.log(data.type);
    // console.log(data.setup);
    // console.log(data.punchline);

  

   

}
btn.addEventListener("click",getData);