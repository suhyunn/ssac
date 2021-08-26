// 함수

// 함수 선언
function comparOne() {
  if (1 === "1") {
    console.log("==true");
  } else {
    console.log("==false");
  }
}

// 함수 사용 => 호출(call)
comparOne();

function comparNumber(number) {
  if (number === "1") {
    console.log("==true");
  } else {
    console.log("==false");
  }
}

comparNumber(1); // 1 === '1'
comparNumber(2); // 2 === '2'
comparNumber(3); // 3 === '3'

function sum(number1, number2) {
  console.log(number1 + number2);
}
sum(1, 2);
sum(3, 6);
sum(4, 10);

// 함수를 호출한 위치에 값을 되돌려 주는 것 : return
// return을 사용하게 되면 함수 내부의 결과값을 함수 외부에서 사용 가능

function sumReturn(number1, number2) {
  let sum = number1 + number2;
  return sum;
}
console.log(sumReturn(1, 2) + 10);

// 함수의 다양한 형식

function hello1() {
  console.log("hello function 1");
}

let hello2 = function () {
  console.log("hello function 2");
};

let hello3 = () => {
  console.log("hello function 3");
};

let hello4 = () => console.log("hello function 4");
// 한 줄만 있을 때는 중괄호 생략하고 바로 씀

hello1();
hello2();
hello3();
hello4();

let hello5 = (number) => {
  console.log(number);
};

let hello6 = (number) => console.log(number);

let hello7 = (number) => console.log(number);
//매개 변수가 1개일 때, 소괄호 생략 가능
hello5(1);
hello6(2);
hello7(3);
