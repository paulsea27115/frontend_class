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

///////// jQuery에서 제공하는 배열 관련 메서드 /////////

// 배열에 저장된 데이터만큼 function 반복 실행 (for문 역할)
// $("요소 선택").each(function)
// $.each($("요소 선택"), function)

const obj = [
    {
      area: "서울",
      name: "디지텍고학생",
    },
    {
      area: "대전",
      name: "예지",
    },
    {
      area: "부산",
      name: "갈매기",
    },
  ];
  // 객체가 담겨있는 배열을 순회
  // function(인덱스, 값)
  $(obj).each(function (i, data) {
    console.log(i + ": ", data);
  });
  
  // li 태그가 담겨있는 배열을 순회
  $.each($("#menu2 li"), function (i, data) {
    console.log(i + ": ", data);
  });
  
  // 매개변수가 1개로! this 키워드 사용
  // 인덱스로 접근한 데이터 -> $(this)
  $.each($("#menu2 li"), function (i) {
    console.log(i + ": ", $(this));
  });
  
  // $.map() : 배열에 저장된 데이터 수만큼 메서드를 반복 실행.
  // 메서드에서 >반환된 데이터를 가지고 새로운 배열을 만들어서 반환<
  
  // obj라는 배열에서 area가 "대전"인 요소만 갖는 배열을 생성
  // filter 기능과 비슷하지만, 기존 데이터를 응용한 새로운 데이터를 생성할때 good
  // map함수에 전달하는 콜백함수(데이터, 인덱스) {조건에 맞는 데이터 반환}
  const result1 = $.map(obj, function (data, idx) {
    if (data.area == "대전") {
      return data;
    }
  });
  
  const result2 = $.map(obj, function (data, idx) {
    if (data.area == "대전") {
      return { ...data, age: 20 };
    }
  });
  
  // $.grep() : 배열에 저장된 데이터 수만큼 메서드를 반복 실행.
  // 인덱스 오름차순으로 배열의 데이터를 불러옴.
  // 메서드의 반환값이 true면 데이터를 새 배열에 저장해서 새로운 배열을 반환
  // filter 기능과 동일! (기존 데이터를 필터링할 수만 있고 응용할 순 없다)
  const result3 = $.grep(obj, function (data, endIdx) {
    if (data.area == "대전") {
      return false;
    } else {
      return true;
    }
  });
  
  // $.inArray() : 배열 안에 데이터가 있는가?
  // -> 존재한다면 해당 데이터의 인덱스값
  // -> 없으면 -1 리턴
  // $.isArray() : 찾고자 하는 데이터가 배열 객체면 true / 아니면 false
  // $.merge(targetArr, subArr) : 두 배열을 하나의 객체로 결합
  // -> targetArr에 subArr요소를 결합해주는 역할
  
  const areas = ["서울", "대전", "부산", "전주"];
  const countries = ["한국", "일본", "스페인", "프랑스"];
  const tmpObj = { name: "예지" };
  
  const targetIdx = $.inArray("대전", areas);
  console.log($.isArray(areas));
  
  $.merge(areas, countries);
  
  // $("요소").index("찾고자하는데이터")
  const idxNum = $("#menu2 li").index($("#target"));
  console.log(idxNum);
  //////// 속성 탐색 선택자 /////////
  // 선택한 요소를 기준으로 일치하는 속성 여부를 체크.
  // ex. img 태그 중 src 속성값이 "images/sample.jpg"인거 체크
  
  // $("요소[속성]") : 요소 중 속성 값이 포함한 요소만 가져옴
  console.log($("li[title]"));
  
  // $("요소[속성='조건']") : 요소 중 속성 값&조건까지 일치하는 요소만 가져옴
  console.log($("li[title='content']"));
  
  // $("요소[속성^='조건']") : 요소 중 속성값이 조건으로 시작하는 요소만 가져옴
  console.log($("a[href^='http://']"));
  
  // $("요소[속성$='조건']") : 요소 중 속성값이 조건으로 끝나는 요소만 가져옴
  console.log($("a[href$='com']"));
  
  // $("요소[속성*='조건']") : 요소 중 속성값이 조건을 포함하는 요소만 가져옴
  console.log($("a[href*='naver']"));
  
  // 속성 & 상태
  // $("요소:visible")
  // $("요소:hidden") : 화면에 표시X 상태의 요소를 가져옴 (ex. display:none)
  // $("ul:hidden").css({ display: "block", color: "red" });
  
  // $("요소:selected")
  // $("요소:checked")
  
  // 선택한 요소의 하위 요소 중 상태값 일치하는 데이터의 value 가져옴
  console.log($("#selectWrapper :selected").val());
  console.log($("#checkboxWrapper :checked").val());
  
  // is(":상태") : 선택한 요소의 상태가 지정한 속성과 일치하면 true / 아니면 false
  // checkbox에 선택 여부 / 보이는지 여부 등을 알아볼 때 주로 사용
  console.log($("#menu2").is(":hidden"));