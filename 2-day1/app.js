// // document -> html의 문서 파일를 가져옴
// document.write('안녕하세요')

// // 1. js 대소문자 구분

// // 2. 코드 한줄 후 세미콜론

// // 3. 따옴표 구분
// // \' \" 

// // 변수 선언
// var age = 18; // 사용 X

// // es6(ECMA)
// const age2 = 18; // constant 상수 ,수정 가능
// let age3 = 18; // Let ,수정 재활당 가능

// age3 =  "나 는 야 성인이 될태야"
// // console.log(age3)

// // 자료형
// // 숫자형
// let num = 1;
// let age5 = Number("18");

// // 문자형
// let name = "와가";

// // 논리형
// let falses = true;
// let bool = Boolean(""); // truthy falthy의  개념이 있다
// // 값이 하나라도있으면 대부분 true

// // 빈데이터
// let holy = null;

// // typeof 무슨 자료형인지를 알 수 있다.
// // typeof NaN => number
// // typeof Infinity => number
// // typeof -Infinity => number
// // typeof null => object
// // num num1 num2 num3 식의 이름은 안좋음

// // 연산자
// // 산술 연산자 : + - * / %
// // + 경우 하나라도 문자열이면 문자형으로 출력된다
// // 예)
// console.log(3+"3"); // 33

// // console.log(test++) // 후위 연산자

// // console.log(++test) // 전위 연산자

// // 비교연산자 > < >= <= == != === !==

// // 3 == "3" true
// // 3 === "3" false

// // 논리 연산자 and, or , not
// // and 하나라도 false면 false
// // or 하나라도 true이면 true
// // ! 반댓값 반환

// test = 1
// console.log(true && test === 1 && "무야호");

// // 단축평가 : 표현식을 평사하는 도중에 평가의 결과가
// // 확정된 경우, 나머지 평가는 생략
// // console.log("dog" && "cat"); // 단축평가 -> "cat"

// console.log(false||"미완료");


// // 조건문 if - else if - else

// if (1>2){
//     // 실행문
// } else if(2 > 3){

// } else{

// }
// // 꼭 true/false 가 아니여도 처리함

// // 선택문 switch

// switch(flag){
//     case 1:
//         break;
//     case 2:
//         break;
//     default:
//         console.log("default");
// }
// // 반복문 for, while, do while

// flag = 1;
// while(flag<5){
//     console.log(flag);
//     flag++;
// }

// flag = 1
// do{
//     console.log(flag);
//     flag++;
// }while(flag<5);

// for(let i = 1; i < 10; i++){
//     if (t%2!==0) {
//         continue; // continue 는 
//     }
//     console.log(i);
// }

// 객체
// smartphone.turnOn();
// console.log(smartphone.company);

// 내장 객체 -> String Data, Array, Math
// 가장 기본 객체
const sample = new Object();

// 날씨 정보 객체
const date = new Date();
//get~~~ : 날씨 정보를 가져올때
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getTime());
//set~~~ : 날씨 정보를 수정할떄

// 오늘부터 연말까지 남은 일 수
const lastDay = new Date(2023,11,31);
let diff = lastDay.getTime() - date.getTime();

document.write("<h3>연말까지 "+Math.round(diff/(1000*60*60*24))+"일 남았습니다.</h3>")

//Math 객체
Math.abs();
Math.max(1,2,3,4,5,123);
Math.min(1,2,3,4,5,123);
Math.pow(2,4);
Math.random();
Math.round();
Math.ceil();
Math.floor();
Math.PI;
Math.sqrt();

console.log(Math.floor(Math.random() * 11));

// 배열: 여러 ㅐ의 데이터를 묶어서 저장하고자 할떄
// 방식 1
const arr = new Array();
arr[0] = 1;

// 방식 2
const arr2 = new Array(1,2);

//방식 3
const arr3 = [1,2];

console.log(arr.join('/'));

arr.reverse(); // 역순
arr.sort(); // 정렬

let startIdx=0;
let endIdx=1;
console.log(arr.slice(startIdx, endIdx)); 

arr.contact(arr2); // 배열 합침
arr.pop(); // 마지막 데이터 리턴 후 삭제
arr.push(); // 마지막 인덱스에 새로운 데이터 넣기

arr.shift(); // 첫번쨰 데이터 리턴 후 삭제
arr.unshift(3); // 첫번쨰 인덱스에 새로운 데이처 추가

arr.length() // 배열의 길이 값
// 배열의 길이 값을 마음대로 늘릴수 있음

for(let i = 0; i < arr.length(); i++){
    console.log(arr[i]);
}

// 브라우저 객체 모델 (BOM)

// window, screen, location, history, navigator
// window.location.href = "http://www.naver.com";

// 문서 객체 모델(DOM) : HTML 문서 구조



