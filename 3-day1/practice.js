// 요소의 속성을 조작할 때 사용
// CSS box-model 했던 부분을 떠올려봅시다
// $("요소선택").height() // padding, border를 제외한 높이를 반환
// $("요소선택").height(100) // 높이를 재설정 
// $("요소선택").width() // padding, border를 제외한 너비를 반환
// $("요소선택").width(100) // 너비를 재설정

// $("요소선택").innerHeight() // padding을 포함한 높이를 반환
// $("요소선택").innerHeight(100) // 높이 재설정 
// $("요소선택").innderWidth() // padding을 포함한 너비를 반환
// $("요소선택").innderWidth(100) // 너비 재설정

// $("요소선택").outerHeight() // padding, border를 포함한 높이를 반환
// $("요소선택").outerHeight(100) // 높이 재설정
// $("요소선택").outerWidth() // padding, border를 포함한 너비를 반환
// $("요소선택").outerWidth(100) // 너비 재설정


//------------------------------------------------
// 절댓값
// $("요소선택").position().left() // 선택한 요소의 위치 값을 반환
// $("요소선택").position().right()
// $("요소선택").position().top()
// $("요소선택").position().bottom()


// offset : 선택한 요소가 문서에서 수직/수평으로 얼마나 떨어져 있는지!
// 상댓값
// $("요소선택").offset().left()
// $("요소선택").offset().right()
// $("요소선택").offset().top()
// $("요소선택").offset().bottom()
//-------------------------------------------------

// $("요소선택").scrollLeft() // 브라우저의 수평 스크롤 이동 높잇값 반환
// $("요소선택").scrollTop() // 브라우저의 수직 스크롤 이동 높잇값 반환