let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) { 
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    if (!btn) return;  
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 500);
}

function userflsh(){
    btn.classList.add("userflsh");
    setTimeout(function(){
        btn.classList.remove("userflsh");

    },500);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4); 
    let randColor = btns[randIdx];
    let randBtn = document.getElementById(randColor);

    gameSeq.push(randColor);
     console.log(gameSeq);


    if (randBtn) {
        btnFlash(randBtn);
    }
}

 function cheakans(idx){
    

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
    } else{
        h2.innerHTML=` game is over ! press any key to restart<b> <br> your score was  ${level} </b>`
        console.log("press any key to restrt");
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
         document.querySelector("body").style.backgroundColor="white";
        },200);
        restart();
    }
 }

 function btnpress(){

    console.log(this);
    let btn=this;
    btnFlash(btn);
    userflsh();

    usercoler=btn.getAttribute("id");
    console.log(usercoler);

    userSeq.push(usercoler);
    console.log(userSeq);

    cheakans(userSeq.length-1);
 }

 let allbtns=document.querySelectorAll(".btn");
 for(btn of allbtns){
     btn.addEventListener("click",btnpress);
 }

 function restart(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
 }