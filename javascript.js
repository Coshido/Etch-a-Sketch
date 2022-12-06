const gridContainer = document.querySelector('#sketch');

function clearGrid(){
    gridContainer.innerHTML = "";
}

function appendDiv(){
        const content = document.createElement('div');
        content.classList.add('grid-item');
        gridContainer.prepend(content);    
}

function createGrid(){
    clearGrid();
    let value = document.querySelector('#slider').value;
    gridContainer.style.setProperty('--grid-cols', value);
    gridContainer.style.setProperty('--grid-rows', value);
    let numberOfChilds= value * value;
    for (let i = 0; i < numberOfChilds; i++){
        appendDiv();
    }
}

createGrid();
