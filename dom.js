const para = document.createElement("p");
const header3 = document.createElement("h3");
const content = document.createElement("div");
const header1 = document.createElement("h1");

const container = document.querySelector(".container");

para.classList.add("text-red-600");
para.textContent = "¡Oye soy rojo!";
header3.classList.add("text-blue-900");
header3.textContent = "¡Soy un h3 en azul!";
const button = document.createElement("button");
button.id = "btn";
button.textContent = "Only button"
button.className = "px-4 py-2 font-semibold text-sm bg-sky-500/75 text-white rounded-md shadow-sm opacity-100"
content.classList.add("border-2", "bg-red-400");

header1.textContent = "Estoy dentro de un div";
paraClone = para.cloneNode(true);

content.append(paraClone,header1);

container.append(para,header3,content, button);

const btn = document.getElementById("btn");

btn.addEventListener("click", e =>{
    // console.log(e);
    e.target.style.background = "blue";
    console.log(e.target);
})

const buttons = document.querySelectorAll(".bg-red-300");

buttons.forEach( item => {
    item.addEventListener( "dblclick", () => alert(item.id))
});