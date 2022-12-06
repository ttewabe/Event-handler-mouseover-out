// import
const statement = document.getElementById("statement");
const optionButtons = document.querySelector("#options").children;
const explanation = document.getElementById("explanation");
let h1 = document.getElementsByTagName("h1");


// make uppercase
let trueButton = optionButtons [0];

 trueButton.addEventListener("click", event => {
    trueButton.textContent = trueButton.textContent.toUpperCase(); 
    setTimeout(() => {
    trueButton.textContent = trueButton.textContent.toLowerCase();
  }, 500);
}); 


// mouse over and mouse out
h1 = h1[0]

h1.addEventListener('mouseover', () =>{
    h1.textContent ="Hovering";
});
h1.addEventListener('mouseout', () => {
    h1.textContent ="Hello";
})

// loop (for-loop), event listener and condition 

// data
const fact = {
    statement: " Arrays are objects",
    answer: true,
    explanation:"Array are a kind of object  with spaciale properties",
}

// solution 
for (let button of optionButtons){
    button.addEventListener("click", (event) => {
     explanation.textContent = fact.explanation;

// if you want to use timer 
        setTimeout(() => {
    explanation.textContent ="";
  }, 5000);
    
});
}

