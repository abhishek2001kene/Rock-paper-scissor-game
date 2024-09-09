let user = 0;
let pc = 0;

const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg")
const uch = document.querySelector("#uch")
const pch = document.querySelector("#pch")
let userScore = document.querySelector("#user")
let pcScore = document.querySelector("#pc")




const pcchoise = () => {
    const options = ["rock", "paper", "scissors"];
    const randumID = Math.floor(Math.random()*3);
    return options[randumID]
}

const draw = () =>{
    console.log('Game is DRAW.');
    msg.innerText = "Game is DRAW. try again."
     msg.style.backgroundColor = "black"
}

const showWinner = (userwin) => {
    if(userwin){
        user++;
        userScore.innerText = user
        console.log('Congratulations, YOU WIN.');
        msg.innerText ="Congratulations, YOU WIN!"
        msg.style.backgroundColor = "green"
       
    }
    else{
        pc++;
        pcScore.innerText = pc
        console.log('YOU LOSS.');
        msg.innerText ="YOU LOSS!"
        msg.style.backgroundColor = "red"
    }
}


const playgame = (userChoise) => {
    console.log("user = ", userChoise)
    const pc = pcchoise()
    console.log("pc = " , pc)

    if(userChoise === pc){
        draw();
    } else{
        let userwin = true;
        if (userChoise === "rock") {
            userwin = pc === "paper" ? false : true
        }
        else if (userChoise === "paper") {
            userwin = pc === "scissors" ? false : true
        }

        else {
            userwin = pc === "rock" ? false : true
        }
    
        showWinner(userwin)
        

    }
    uch.innerText = userChoise
    pch.innerText = pc
}
choises.forEach((choise) => {
    choise.addEventListener("click", () => {
        const userChoise = choise.getAttribute("id")
        playgame(userChoise)
        
    })
})




