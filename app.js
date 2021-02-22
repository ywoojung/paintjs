const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    //console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting) {
        // painting 이 true 일때
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        // painting 이 false 일때
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    
}

// function onMouseDown(event) {
//     //console.log(event);
//     painting = true;
// }


if(canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}