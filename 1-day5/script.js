const userAge = Number(prompt("당신의 나이는?"));

if(number.isNaN(userAge)){
    alert("숫자만 입력해주세요")
} else if (age < 20) {
    alert("당신은 학생입니다.")
} else {
    alert("당신은 성인입니다.")
}
  
function getWonPrice(priceList) {
    return priceList
      .filter((price) => Number(price) > 1000)
      .sort((a, b) => a - b)
      .map((data) => data + "원");
  }