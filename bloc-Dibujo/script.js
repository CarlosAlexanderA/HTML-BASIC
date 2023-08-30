const container = document.getElementById("container");
const cols = document.getElementById("cols");
const rows = document.getElementById("rows");
const btnGrid = document.getElementById("btnGrid")
const printGrid = (x,y) =>{
    for (let i = 0; i < x; i++) {

        const contentFila = document.createElement("div");
        contentFila.className = "basis-full flex justify-center content-center";
    
        for (let j = 0; j < y; j++) {
            const square = document.createElement("div");
            square.className = `bg-gray-500 border border-black h-${y>=64?"4":"16"} w-16 item`;
            contentFila.appendChild(square);
        }
        container.appendChild(contentFila);
        
    }

    const items = document.querySelectorAll(".item");
    items.forEach((item) =>{
        item.addEventListener("mouseenter", () => {
            console.log(item.clientWidth);
            item.clientWidth = 40;
            console.log(item.clientWidth);

            item.classList.remove("bg-gray-500")
        });
    }) 
}



btnGrid.addEventListener("click", () =>{
    container.innerHTML = "";
    printGrid(rows.valueAsNumber,cols.valueAsNumber);
});

printGrid(16,16);


const user = {
    name: "Jhon",
    age: 23,
}

