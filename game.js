//developed by Vamika Arya
let cscore=0;
let pscore=0;
let cscorebox=document.querySelector("#cscorebox");
let pscorebox=document.querySelector("#pscorebox");
let h2=document.querySelector("h2");
let h4=document.querySelector("h4");
let creator=document.querySelector("#creator");
let linkedin=document.querySelector("#linkedin");
let info=document.querySelector("#info");
let br=document.createElement("br");

//GENERATING COMPUTER'S CHOICE AND UPDATING SCORES 
let playgame=(userchoice)=>{
    let choice_array=["stone","paper","scissor"];
    let computer_choice=choice_array[Math.floor(Math.random()*3)];
    console.log(`Computer's Choice is **${computer_choice}**`);
    // console.log(`User's Choice is ${userchoice}`);
    if(userchoice=="stone"&&computer_choice=="paper"){
        cscore++;
        alert("Computer Wins!");
        cscorebox.innerText=cscore;
    }
    else if(userchoice=="stone"&&computer_choice=="scisoor"){
        pscore+=1;
        alert("User Wins!");
        pscorebox.innerText=pscore;
    }
    else if(userchoice=="paper"&&computer_choice=="stone"){
        pscore+=1;
        alert("User Wins!");
        pscorebox.innerText=pscore;
    }
    else if(userchoice=="paper"&&computer_choice=="scissor"){
        cscore+=1;
        alert("Computer Wins!");
        cscorebox.innerText=cscore;
    }
    else if(userchoice=="scissor"&&computer_choice=="paper"){
        pscore+=1;
        alert("User Wins!");
        pscorebox.innerText=pscore;
    }
    else if(userchoice=="scissor"&&computer_choice=="stone"){
        cscore+=1;
        alert("Computer Wins!");
        cscorebox.innerText=cscore;
    }
    else{
        alert("It's a tie!");
    }
}



//ADDING EVENT LISTENERS FOR MONITORING THE TICKS ON CHOICES
let stone=document.querySelector("#stone");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");
stone.addEventListener("click",()=>{
    console.log("User's Choice is **Stone**.");
    let userchoice="stone";
    playgame(userchoice);
})
paper.addEventListener("click",()=>{
    console.log("User's Choice is **Paper**.");
    let userchoice="paper";
    playgame(userchoice);
})
scissor.addEventListener("click",()=>{
    console.log("User's Choice is **Scissor**.");
    let userchoice="scissor";
    playgame(userchoice);
})


//ADDING ANIMATION FOR PLAY BUTTON
let button=document.getElementById("play");
button.addEventListener("click",()=>{
    button.style.animation="rotate 0.2s ease-in 0s 5 normal";
})
button.addEventListener("mouseover",()=>{
    button.style.cursor="grab";
})


//ADDING A MODE CHANGE BUTTON
let modechangebutton=document.createElement("button");
document.body.prepend(modechangebutton);
modechangebutton.setAttribute("id","modechangebutton");
modechangebutton.style.margin="10px";
modechangebutton.style.fontWeight="bold";
modechangebutton.innerText="play in dark mode";
let mode="light";
let radial_gradient1='radial-gradient(circle,white,grey)';
let radial_gradient2='radial-gradient(circle, #000000 0, #585a66 100%)';
modechangebutton.addEventListener("click",()=>{
    if (mode=="light"){
        mode="dark";
    }
    else{
        mode="light";
    }
})
modechangebutton.addEventListener("click",()=>{
    if (mode=="light"){
        document.body.style.backgroundColor="black";
        modechangebutton.innerText="play in light mode";
        h2.style.color="aliceblue";
        h4.style.color="aliceblue";
        modechangebutton.style.backgroundImage=radial_gradient1;
        modechangebutton.style.color="black";
        
    }
    else{
        document.body.style.backgroundColor="white";
        modechangebutton.innerText="play in dark mode";
        h2.style.color="black";
        h4.style.color="black";
        modechangebutton.style.backgroundImage=radial_gradient2;
        modechangebutton.style.color="aliceblue";
    }
}
)

//ADDING A BUTTON TO SCROLL DOWN TO "ABOUT THE DEVELOPER"
let scrollbutton=document.querySelector("#scrollbutton");
scrollbutton.style.display="block";
scrollbutton.style.margin="10px";
modechangebutton.after(scrollbutton);
scrollbutton.addEventListener("click",()=>{
    h2.scrollIntoView({behavior:'smooth'});
})
h4.style.transform="translateY(-260px)";
h4.style.fontSize="25px";
h4.append(linkedin);
linkedin.style.display="block";
linkedin.style.fontWeight="lighter";
linkedin.style.fontSize="20px";
linkedin.style.marginTop="15px";