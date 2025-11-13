function ex01(name) {
  console.log(`Hello, ${name}!`);
}

ex01("용혜중");
//------------------------------------------

function ex02(num1, num2) {
  return num1 + num2;
}

console.log(ex02(3, 5));
//------------------------------------------

const ex03 = (num1, num2) => num1 * num2;

console.log(ex03(3, 5));
//------------------------------------------

function ex04(num1, num2) {
  if(num1 > num2) {
    console.log("첫번째 숫자가 더 큽니다");
  }else {
    console.log("두번째 숫자가 더 크거나 같습니다");
  }
}

ex04(3, 5);
//---------------------------------------------

function ex05(str) {
  console.log(str.length);
}

ex05("안녕하세요");
//---------------------------------------------

function ex06(str, count) {
  for(let i=0; i < count; i++) {
    console.log(str);
  }
}

ex06("안녕하세요", 5);
//---------------------------------------------

function ex07(num) {
  if(num % 2 ==0) return true;
  else return false;
}

console.log(ex07(5));
//---------------------------------------------

function ex08(num1, num2, num3) {
  let max;
  if(num1 >= num2) max = num1;
  else max = num2;

  if(num3 >= max) max = num3;
  return max;
}

console.log(ex08(5, 2, 7));
//---------------------------------------------

const ex09 = arr => arr[0];

console.log(ex09(['yong','h','j', 86]));
//---------------------------------------------

function ex10(arr) {
  let sum = 0;
  let average = 0;
  let count = 0;

  for(let i=0; i < arr.length; i++) {
    if(typeof arr[i] == 'number'){
      sum += arr[i];
      count++;
    }
  }
  average = sum / count;

  return {"sum":sum, "average":average};
}

console.log(ex10(['오후', 5, 41, 'date', 11, 13]));
//-----------------------------------------------
