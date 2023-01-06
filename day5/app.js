const clickHandler1 = () => console.log("클릭 핸들러 1");
const clickHandler2 = () => console.log("클릭 핸들러 2");

// 가장 마지막에 호출된 요소만 작동
//h1titleElement.onclick = clickHandler1; // 작동X
//h1titleElement.onclick = clickHandler2; // 작동O

// 모든 요소가 잘 작동 (호출된 순서대로~)
h1titleElement.addEventListener("click", clickHandler1); //작동O
h1titleElement.addEventListener("click", clickHandler2); //작동O

h1titleElement.removeEventListener("click", clickHandler1); // clickHandler1 작동X하게 했음!