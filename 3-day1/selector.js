// $("h2").next().css("color","blue");
// $("h2").parent().css("border","1px soild red");

// // 부모
// $("li").css("border","1px solid red");


// $("wrap").css("color","red");
// $("#inner-erap").childer("h1".css())
// $("#target").next().next().css("color","red");
// $("#target").prev().prev().css("color","blue");
// nextAll()과 prevAll()도 있음

// 전체 요소
// $("#target")siblings().css("color","blue"); 

// 범위제한
// $("#target").prevUntil(".content0").css("color","red");
// $("#target").nextUntil(".content4").css("color","blue");

//  상위요소
// 모든
// $("#target").parents().css("border","1px soild red");

// 원하는 요소
$("#target").parents("#inner-wrap").css("border","1px soild red");

// 가까운 요소
$("#target").closest("ul").css("border","1px soild red");
