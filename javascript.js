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

function clearButtonColors(){
    const switchButtonList = [...document.querySelectorAll('.switchButton')];
    for (let ele in switchButtonList){
        switchButtonList[ele].setAttribute('style','color: #212529; background-color: #F8F9FA;');;
    }
  //  .setAttribute('style','color: #212529; background-color: #F8F9FA;');
    
}
function modeSelector(string){
    clearButtonColors();
    switch (string){
        case 'color':
            document.querySelector('#color').setAttribute('style','color: #F8F9FA; background-color: #343A40;');
            colorMode();
            break;
        case 'rainbow':
            document.querySelector('#rainbow').setAttribute('style','color: #F8F9FA; background-color: #343A40;');
            rainbowMode();
            break;
        case 'eraser':
            document.querySelector('#eraser').setAttribute('style','color: #F8F9FA; background-color: #343A40;');
            eraserMode();
            break;
    }
    
}

createGrid();
