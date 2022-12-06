const button = document.getElementById("clickme");
const paragraphs = document.querySelectorAll("p");

button.addEventListener("click", event => {
    for (let p of paragraphs){
        p.classList.toggle("hidden");
    }
})