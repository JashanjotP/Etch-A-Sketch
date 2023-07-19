const gridContainer = document.querySelector(".container");
const slider = document.querySelector(".rangeSelector");
const sliderValue = document.querySelector(".rangeValue");

let boxes = slider.value
sliderValue.innerHTML = boxes+"x"+boxes;
for(let i =0; i<boxes*boxes; i++){
    const div = document.createElement('div');

    div.classList.add('cell');

    div.addEventListener('mouseenter', div => {

        let colour = '#';
        const characters = '0123456789ABCDEF';
        for(let i=0; i<6; i++){
            let index= Math.floor(Math.random() * characters.length);
            colour += characters[index];
        } 
        div.target.style.backgroundColor = colour;
    });3
    
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
    
        div.addEventListener('mouseenter', div => {
    
            let colour = '#';
            const characters = '0123456789ABCDEF';
            for(let i=0; i<6; i++){
                let index= Math.floor(Math.random() * characters.length);
                colour += characters[index];
            } 
            div.target.style.backgroundColor = colour;
        });3
        
        gridContainer.appendChild(div);
        
    }

   
    gridContainer.style.gridTemplateColumns = `repeat(${boxes},1fr)`; // Adjust the width of columns as needed
    gridContainer.style.gridTemplateRows = `repeat(${boxes},1fr)`; // 


});