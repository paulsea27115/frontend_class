const h1titleElement = document.querySelector("h1");
const inputElement = document.querySelector("#user-input");
const btnElement = document.querySelector("button");
const squareElement = document.querySelector("#square");


// 버튼이 클릭됬을 때! input요소의 값을 받아오려고 함
btnElement.addEventListener("click", () => {
    if (inputElement.value==="")
        h1titleElement.innerHTML = "Default Title";     
    else
        h1titleElement.innerHTML=inputElement.value;
});

// ----------------------------------------------------------------

let clientX;
let clientY;

let isMouseUp = false;

function logMouseMove(e) {
    if (!isMouseUp) {
        squareElement.style.top = (e.clientY - squareElement.clientHeight) + 'px';
        squareElement.style.left = (e.clientX - squareElement.clientWidth/2) + 'px';
    }
}

squareElement.addEventListener('mousedown', () => {
    isMouseUp = false;
    document.addEventListener('mousemove', logMouseMove);
});

squareElement.addEventListener('mouseup', ()=>{
    isMouseUp = true;
});