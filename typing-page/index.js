let target = document.querySelector("#dynamic");
// id가 dynamic인 속성값을 갖고 있는 문서 객체를 선택

function randomString() {
  let stringArr = [
    "Learn to HTML",
    "Learn to CSS",
    "Learn to JavaScript",
    "Learn to Python",
    "Learn to React",
  ];

  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  // stringArr 안에 있는 요소 중 랜덤하게 선택하도록 만든 함수
  // Math.random 메서드를 사용해 stringArr의 길이만큼 랜덤하게 나오도록 설정
  // Math.floor 메서드를 사용해 소수점 부분을 없앰

  let selectStringArr = selectString.split("");
  // 해당 문자열을 배열로 분리시키기

  return selectStringArr;
}

function resetTyping() {
  target.textContent = ""; // target의 텍스트가 사라지게 함
  dynamic(randomString());
}

function dynamic(randomArr) {
  // 타이핑 효과 함수, 하나씩 배열 요소(텍스트)가 빠져 나오게 함.
  if (randomArr.length > 0) {
    // 만약 randomArr의 길이가 0보다 크다면,
    target.textContent += randomArr.shift();
    // shift() : 배열의 앞부분부터 빼 내서 출력하는 메서드
    // id가 dynamic인 속성값을 갖고 있는 문서 객체의 textContent로 randomArr이 갖고 있는 배열 요소의 첫 번째를 shift해서 뺀 것.
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
    // randomArr이 0보다 여전히 크다면 다시 호출(재귀함수 사용)
    // setTimeout으로 0.08초마다 호출
  } else {
    setTimeout(resetTyping, 2000);
  }
}

// randomArr 이라는 매개변수를 받음
// 아래 dynamic을 호출할 때 랜덤 배열을 매개로 해서 전달

dynamic(randomString());

function blink() {
  target.classList.toggle("active");
}
// classList.toggle 메서드로 active라는 클래스가 추가/반복 되도록 blink 함수를 생성
// classList 속성 자체는 읽기 전용이지만, 메서드를 사용하면 연결된 속성을 수정할 수 있음.

setInterval(blink, 500);
// 반복함수를 이용해 blink라는 함수를 0.5초마다 실행하도록 함.
