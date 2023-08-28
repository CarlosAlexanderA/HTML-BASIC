const computerSelection = () =>{
    let options = ["sissors", "paper", "rock"];
    let numRandom = Math.floor(Math.random()*3);

    return options[numRandom];
};
const cPoint = document.getElementById("cPoint");
const pPoint = document.getElementById("pPoint");

const buttons = document.querySelectorAll("button");

const output = document.getElementById("output");


let points1 = 0;
let points2 = 0;
let result;

window.addEventListener("click", e =>{
    let compuOption = computerSelection();
    const textOutput = document.createElement("p");

    switch (e.target.id) {
        case "paper":
            if (compuOption === "rock") {
                result = "Winner is Player";
                points1++;
            }else if(compuOption === "sissors"){
                result = "winner is a Computer";
                points2++;
            } else result = "Empate";
            break;
        case "rock":
            if (compuOption === "sissors") {
                result = "Winner is Player";
                points1++;
            }else if(compuOption === "paper"){
                result = "winner is a Computer";
                points2++;
            } else result = "Empate";
            break;
        case "sissors":
            if (compuOption === "paper") {
                result = "Winner is Player";
                points1++;
            }else if(compuOption === "rock"){
                result = "winner is a Computer";
                points2++;
            } else result = "Empate";
            break;
        default:
            break;
    }
    textOutput.className = "my-2"
    textOutput.textContent = result;

    cPoint.textContent = points2;
    pPoint.textContent = points1;

    console.log(compuOption)

    output.appendChild(textOutput);

    if (points1 >= 5 || points2 >= 5) {
        paraClone = textOutput.cloneNode(true);
        paraClone.className = "text-xl text-emerald-500"
        buttons.forEach((item) => {
            item.disabled = true;
            item.classList.remove("bg-blue-200");
            item.classList.add("bg-gray-200");
            paraClone.textContent = `El ganador es ${points1 >=5 ? "Player" : "Computer"}`;

            output.appendChild(paraClone);
        });
    }

    console.log(e.target.id);


});




