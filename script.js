document.addEventListener("DOMContentLoaded", () => {

})

let usercount = 0;
let cpucount = 0;

document.getElementById("rock").addEventListener("click", () => {
    let user = "R";
    decidewinner(user);

})

document.getElementById("paper").addEventListener("click", () => {
    let user = "P";
    decidewinner(user);})

document.getElementById("scissor").addEventListener("click", () => {
    let user = "S";
    decidewinner(user);
})

function decidewinner(userinput) {
    let variable = document.getElementById("firstline");
    let variable2 = document.getElementById("secondline");
    let output = ["R", "P", "S"];
    let cpuinput = output[Math.floor(Math.random() * 3)];

    if(userinput == cpuinput){
        variable.firstChild.nodeValue = "Match drawn";
    }
    else if (userinput == "R" && cpuinput == "P"){
        variable.firstChild.nodeValue = "Paper beats Rock. You lose.";
        cpucount++;
    }
    else if (userinput == "R" && cpuinput == "S"){
        variable.firstChild.nodeValue = "Rock beats Scissor. Congratulations You win.";
        usercount++;
    }
    else if (userinput == "P" && cpuinput == "R"){
        variable.firstChild.nodeValue = "Paper beats Rock. Congratulations You win.";
        usercount++;
    }
    else if (userinput == "P" && cpuinput == "S"){
        variable.firstChild.nodeValue = "Scissor beats Paper. You lose.";
        cpucount++;
    }
    else if (userinput == "S" && cpuinput == "P"){
        variable.firstChild.nodeValue = "Scissor beats Paper. Congratulations You win.";
        usercount++;
    }
    else if (userinput == "S" && cpuinput == "R"){
        variable.firstChild.nodeValue = "Rock beats Scissor. You lose.";
        cpucount++;
    }

    variable2.firstChild.nodeValue = "Player score is: " + usercount + ", Computer score is: " + cpucount;

    if(usercount == 5 || cpucount == 5){
        result(usercount, cpucount);
    }

}

function result(user, cpu){
    if(user == 5){
        usercount = 0;
        cpucount = 0;
        location.replace("userwin.html");
    }
    else{
        location.replace("cpuwin.html");
    }
}