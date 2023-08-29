let gameSeq=[];
let userSeq=[];
let started= false;
let level =0;
let highestScore=0;
let btns=["yellow","green","purple","red"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200)

}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText =`Level ${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    let randomColor=btns[randomIdx]; 
    let randombtn=document.querySelector(`.${randomColor}`)  
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randombtn); 
    gameFlash(randombtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    // if(level>highestScore){
    //     highestScore+=1;
    // }

}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`Game Over! ,Your Scored <b>${level}</b><br> Press Any Key To Reset<br>
        The highes score was ${highestScore}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="aliceblue";
        },150)
        
        reset();
    }

}
function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
    
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    if(highestScore<level){
        highestScore=level;
    }
    level=0;

}
