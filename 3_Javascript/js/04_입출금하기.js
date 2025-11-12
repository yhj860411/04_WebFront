// prompt 사용연습

function test() {
  const password = prompt("비밀번호를 입력하세요");

  console.log(password);

  // 확인 -> 입력한 값이 문자열로 저장
  // 취소 -> null

  if(password == null) { // 취소
    alert("취소");
  } else { // 확인
    if(password == '1234') { // 비밀번호가 같을 때
      alert("비밀번호 일치");

    } else { // 비밀번호가 다를때
      alert("비밀번호 불일치");
    }

  }
}

// ------------------------------------------------------------

const amount = document.getElementById("amount");
let balance = 10000;
const password = '1234';
const output = document.getElementById("output");
output.innerText = balance;

function deposit() {

  // amount.value.length == 0
  if(amount.value.length == 0) {
    alert("금액을 입력해주세요!");
  } else {
    const inputValue = Number(amount.value);
    balance += inputValue;

    output.innerText = balance;

    amount.value = ''; // input에 작성된 값 제거
  }
  
}

function withdrawal() {

  if(amount.value.length == 0) {
    alert("금액을 입력해주세요!");
  } else {
    const inputPassword = prompt("비밀번호를 입력하세요");

  if(inputPassword == null) {
    alert("취소되었습니다");
  } else {
    if(inputPassword == password){
        const inputValue = Number(amount.value);
      if(inputValue <= balance) {
        balance -= inputValue;
        alert(`${inputValue}원이 출금되었습니다. 남은 잔액 : ${balance}원`);
        // 템플릿 리터럴(Template Literal)
        // 백틱(``)을 사용하여 문자열을 감싸고,
        // ${} 안에 변수/값을 넣어 동적으로 문자열을 생성하는 방식

        output.innerText = balance;
      } else {
        alert("출금 금액이 잔액보다 클 수 없습니다");
      }
    } else {
      alert("비밀번호가 일치하지 않습니다");
    }
  }
  amount.value = '';
  }
}
