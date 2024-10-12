let userscore=0;
let com=0;
let options=[]

const choice=document.querySelectorAll(".feature");
let i=0;

//getting all id of options
for(let c of choice)
{
options[i]=c.getAttribute("id");
i++
}

//generaiong rendom options
const sysChoice=()=>{
    const randIdx=Math.floor(Math.random()*options.length)

    return options[randIdx];

}

//checking result
const result=(userChoice)=>{
    let sysop=sysChoice();
    if(sysop===userChoice)
    {
        Draw();
    }
    else{
        let userwin=true;
        if(userChoice==="rock")
        {
                userwin=sysop==="paper" ?false : true;
        }
        else if(userChoice==="paper"){
            userwin=sysop==="scissors"? false : true;
        }
        else{
        userwin=sysop==="rock" ? false : true;
        }
        showWinner(userwin,userChoice,sysop);
    }

}

choice.forEach((op)=>{
    op.addEventListener("click",()=>{
        const userChoice=op.getAttribute("id");
        result(userChoice);
    })
})

//draw result
let msg=document.querySelector("#msg")
const Draw=()=>{
msg.innerText="Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
}

//winner result on text
const showWinner=(userwin,userChoice,sysop)=>
{
    if(userwin==true)
    {
        userscore++;
        document.querySelector(".myscore").innerText=userscore;
        msg.innerText=`You win! Your ${userChoice} beats ${sysop}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        com++;
        document.querySelector(".comp-score").innerText=com;
        msg.innerText=`you lost.${sysop} beats your ${userChoice}`;
        msg.style.backgroundColor="red"; 
    }
}