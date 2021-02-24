const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');


const INITAL_COLOR = '#2c2c2c';
const CANVAS_SIZE = 500;


canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITAL_COLOR;
ctx.lineWidth = 2.5;

ctx.fillStyle = INITAL_COLOR;


let painting = false;
let filling = false;


function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

//마우스만 움직이면 false, 클릭 한채로 움직이면 true
function onMouseMove(event) {
    //console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting) {
        // painting 이 true 일때     //<경로를 만든다.>
        ctx.beginPath();            //경로생성
        ctx.moveTo(x, y);           //선 시작 좌표
    } else {
        // painting 이 true 일때     //<그린다.>
        ctx.lineTo(x, y);           //선 끝 좌표
        ctx.stroke();               //선 그리기
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;                            //선으로 그렸을때의 색
    ctx.fillStyle = color;                              //전체 채웠을때의 색
}

function handleCanvasClick() {
    //fill 버튼이 활성화 되어있을때만 작동
    if(filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click', handleCanvasClick)
}

Array.from(colors).forEach(crayon => crayon.addEventListener('click', handleColorClick));


function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

if(range) {
    range.addEventListener('input', handleRangeChange);
}

function handleModeClick(event) {
    if(filling === true) {
        filling = false;
        mode.innerText = 'FILL';
    } else {
        filling = true;
        mode.innerText = 'PAINT';
    }
}

if(mode) {
    mode.addEventListener('click', handleModeClick);
}

