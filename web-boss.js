const container = document.querySelector(".container");

const audio = document.createElement("audio");
audio.preload = "auto";
audio.src = "https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3";

window.addEventListener("keypress", (e)=>{
    for (const item of container.children) {
        if(e.key == item.textContent.toLowerCase()){
            item.classList.remove("border-black");
            audio.play()
            .then(() => console.log("Ha comenzado a reproducirse el sonido..."));
            document.body.appendChild(audio);

        }
    }
})

window.addEventListener("keyup", (e) =>{
    for (const item of container.children) {
        if(e.key == item.textContent.toLowerCase()){
            item.classList.add("border-black");
            audio.load();
            audio.pause();

        }
    }
})