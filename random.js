let  a=Math.random[100];
a=Number.parseInt(a);
let lnp;
let score=100;
while(lnp!=a){
    score=score-1;
    lnp=prompt["enter the number"]
    if(lnp==a){
        console.log("you got number");
        console.log(100-score);

    }else if(lnp>a && lnp<100){
        console.log("greater number");
    }else if(lnp<a && lnp>0){
        console.log("smmaler number");
    }
}

