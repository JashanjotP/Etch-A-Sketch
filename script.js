const gridContainer = document.querySelector(".container");
const slider = document.querySelector(".rangeSelector");
const sliderValue = document.querySelector(".rangeValue");
const eraser  = document.querySelector(".Eraser");
const rainbow  = document.querySelector(".Rainbow");
const clear = document.querySelector(".clear")


let boxes = slider.value
sliderValue.innerHTML = boxes+"x"+boxes;

let colourChoice = "rainbow";


    eraser.addEventListener("click",()=>{
        colourChoice = "erase";
    });

    rainbow.addEventListener("click",()=>{
        colourChoice = "rainbow";

    });

    


for(let i =0; i<boxes*boxes; i++){
    const div = document.createElement('div');

    div.classList.add('cell');

    div.addEventListener('mouseenter', () => {

        if(colourChoice === "rainbow"){
            let colour = '#';
            const characters = '0123456789ABCDEF';
            for(let i=0; i<6; i++){
                let index= Math.floor(Math.random() * characters.length);
                colour += characters[index];
            } 
            div.style.backgroundColor = colour;
        }
        else if(colourChoice === "erase"){
            div.style.backgroundColor = "white";
        }
    });
    
    gridContainer.appendChild(div);

    
    
}


gridContainer.style.gridTemplateColumns = `repeat(${boxes},1fr)`; // Adjust the width of columns as needed
gridContainer.style.gridTemplateRows = `repeat(${boxes},1fr)`; // 

slider.addEventListener('input', () => {
    
    boxes = slider.value;
    sliderValue.innerHTML = boxes+"x"+boxes;

    gridContainer.innerHTML = "";
    
    for(let i =0; i<boxes*boxes; i++){
        const div = document.createElement('div');
    
        div.classList.add('cell');
    
        div.addEventListener('mouseenter', () => {
            if(colourChoice === "rainbow"){
                let colour = '#';
                const characters = '0123456789ABCDEF';
                for(let i=0; i<6; i++){
                    let index= Math.floor(Math.random() * characters.length);
                    colour += characters[index];
                } 
                div.style.backgroundColor = colour;
            }
            else if(colourChoice === "erase"){
                div.style.backgroundColor = "white";
            }
        });
        
        gridContainer.appendChild(div);
        
    }

   
    gridContainer.style.gridTemplateColumns = `repeat(${boxes},1fr)`; // Adjust the width of columns as needed
    gridContainer.style.gridTemplateRows = `repeat(${boxes},1fr)`; // 


});



clear.addEventListener("click", () => {
    const cells = gridContainer.querySelectorAll(".cell");
    
  
    cells.forEach((cell) => {
      cell.style.backgroundColor = "white";
    });
  });