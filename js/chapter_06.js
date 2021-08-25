// Scope

// Global Scope (전역 범위)
let name = "tom";

function sumPrint() {
  // Function Scope (함수 범위)
  let sum = 50;

  for (let i = 0; i < 3; i++) {
    // Block Scope (블록 범위)
    let msg = "hello world";

    // 블록 범위
    console.log(name);
    console.log(sum);
    console.log(msg);
  }

  // 함수 범위
  console.log(name);
  console.log(sum);
  // console.log(msg);
}
// 전역 범위
console.log(name);
// console.log(sum);
// console.log(msg);

// var :  Global Scope, Function Scope 만 적용 가능

// this
let person = {
  name: "Jack",
  print: function () {
    console.log(this.name);
    console.log(this);
  }
};

person.print();
console.log(person);
console.log(this);

// let x = this; //x는 window객체
// x.alert("msg");

function type() {
  console.log(this);
}
type(); //함수 안에서도 window객체(전역)

// alert("msg"); //this. 생략가능
