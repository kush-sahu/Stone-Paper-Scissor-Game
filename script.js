

let scoreStr=localStorage.getItem('score');
let score;
if(scoreStr !== null){
    score=JSON.parse(scoreStr);
}

else{
 score={
    win:0,
    loss:0,
    tie:0
 };
}


document.querySelector("#win").innerText=`Win=${score.win}`
    document.querySelector("#loss").innerText=`Loss=${score.loss}`
    document.querySelector("#tie").innerText=`Tie=${score.tie}`

let userchoice;
document.querySelector(".stone").onclick=function(){
     userchoice='stone';
     
     playGame();
}
document.querySelector(".paper").onclick=function(){
    userchoice='paper';
    playGame();
}
document.querySelector(".seazor").onclick=function(){
    userchoice='seazor';
    playGame();
}

function playGame(){
let compu_choice=Math.random()*3;
let finalchoice;
if(compu_choice >0 && compu_choice <1){
      finalchoice='stone';
}else if(compu_choice >1 && compu_choice <2){
    finalchoice='paper';
}else if(compu_choice >2 && compu_choice <3){
    finalchoice='seazor';
}


if(userchoice === finalchoice){
    score.tie++;
    showresult();
    document.querySelector("#computer").innerText=finalchoice;
     document.querySelector(".input").innerText="tie";
    
}else if(userchoice==='paper' && finalchoice==='stone'){
    document.querySelector("#computer").innerText=finalchoice;
    score.win++;
    showresult();
    document.querySelector(".input").innerText="user won";
    console.log("");
}else if(userchoice==='paper' && finalchoice==='seazor'){
    document.querySelector("#computer").innerText=finalchoice;
    document.querySelector(".input").innerText="Computer won";
    score.loss++;
    showresult();
    
}
else if(userchoice==='stone' && finalchoice==='paper'){
    document.querySelector("#computer").innerText=finalchoice;
    document.querySelector(".input").innerText="Computer won";
    score.loss++;
    showresult();
}else if(userchoice==='stone' && finalchoice==='seazor'){
    document.querySelector("#computer").innerText=finalchoice;
    score.win++;
    showresult();
    document.querySelector(".input").innerText="user won";
}else if(userchoice==='seazor' && finalchoice==='paper'){
    document.querySelector("#computer").innerText=finalchoice;
    score.win++;
    showresult();

    document.querySelector(".input").innerText="user won";
}else if(userchoice==='seazor' && finalchoice==='stone'){
    document.querySelector("#computer").innerText=finalchoice;
     score.loss++;
     showresult();
   
    document.querySelector(".input").innerText="computer won";
}

}

function showresult(){
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector("#win").innerText=`Win=${score.win}`
    document.querySelector("#loss").innerText=`Loss=${score.loss}`
    document.querySelector("#tie").innerText=`Tie=${score.tie}`
   

}
document.querySelector("#clear").onclick=function(){
    localStorage.clear();
    score={
        win:0,
        loss:0,
        tie:0
     };
     document.querySelector("#win").innerText=`Win=${score.win}`
     document.querySelector("#loss").innerText=`Loss=${score.loss}`
     document.querySelector("#tie").innerText=`Tie=${score.tie}`
    }
