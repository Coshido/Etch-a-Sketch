const gridContainer = document.querySelector('#sketch');
let mode = "black";
let mouseDown = false;
document.body.onmousedown = function(){
    mouseDown = true;
}
document.body.onmouseup = function() {
    mouseDown = false;
}

function clearGrid(){
    gridContainer.innerHTML = "";
}
function changeColor(e){
    if(mouseDown){
        switch (mode){
            case 'color':
                break;
            case 'rainbow':
                let color1 = Math.floor(Math.random() * 256);
                let color2 = Math.floor(Math.random() * 256);
                let color3 = Math.floor(Math.random() * 256);
                e.target.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
                break;
            case 'eraser':
                break;
            default:
                break;
        }
    }
}

function appendDiv(){
        const content = document.createElement('div');
        content.classList.add('grid-item');
        content.addEventListener('mousedown', changeColor);
        content.addEventListener('mouseover', changeColor);
        gridContainer.prepend(content);    
}

function createGrid(){
    clearGrid();
    let value = document.querySelector('#slider').value;
    document.querySelector('#slider-text').textContent = `Grid size: ${value} x ${value}`;
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
            mode = "color";
            break;
        case 'rainbow':
            document.querySelector('#rainbow').setAttribute('style','color: #F8F9FA; background-color: #343A40;');
            mode = "rainbow";
            break;
        case 'eraser':
            document.querySelector('#eraser').setAttribute('style','color: #F8F9FA; background-color: #343A40;');
            mode = "eraser";
            break;
        default:
            break;
    }
    
}

createGrid();
