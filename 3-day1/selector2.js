// 탐색 선택자

// first / last 선택자
// $("#menu li:first").css("background-color","skyblue");


// even / odd 선택자
// $("#menu li:even").css("background-color","grey");
// $("#menu li:odd").css("background-color","black");
// $("#menu li").css("color","white");

// nth-child(숫자n) 선택자
// $("#menu li:nth-child(4n)").css("color","grey");

// equal => eq
// less than => lt
// greater than => gt

// eq(index)
// lt(index)
// gt(index)
// $("#menu li").eq(2).css("color","lightgrey");
// $("#menu li:eq(2)").css("color","lightgrey");
// $("#menu li:lt(2)").css("color","skyblue");
// $("#menu li:gt(2)").css("color","pink");

// 첫번째/ 마지막
// $("menu li:first-of-type").css("color","yellow");
// $("menu li:last-of-type").css("color","green");

// 부모요소중 하나뿐인 자식 요소일떄
// $("li:only-child").css("border","1px solid red");

// 선택한 요소의 구간을 지정
// $("#menu li").slice(1,3).css("background-color","blue")

