// console.log("started");
// setTimeout(function(){
//     console.log("asycronics");
//     document.getElementById("id").style.background="red";
// },6000);
// console.log("end");
function laodScript(src,callback){
    var script=document.createElement("script");
    script.src=src;
    script.onload=function(){
        console.log("loaded");
        callback(src);
    }
    document.body.appendChild(script);
}

function goodMorging(error,src){
    if(error){
        console.log(error);
        semdMeMessgaeTOCeo();
        return;
    }
    alert("good moring",src);

}

const semdMeMessgaeTOCeo=()=>{
    console.log("mail send");
    

}
laodScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",goodMorging);
