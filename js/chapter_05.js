// Array, Object, Class

const arr = ["a", "b", "c", "d", "e"];
const arr1 = new Array("가", "나", "다");

// 인덱스 번호 사용해서 배열에 엑세스 : 0번부터 사용
console.log(arr[0]);
console.log(arr1[0]);

arr[2] = "2";
console.log(arr[2]);

for (let i = 0; i < 3; i++) {
  console.log(arr[i]);
}

// 배열 데이터는 배열 객체 데이터 형태
// 배열 개수 확인 : 배열객체이름.length

console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// object

console.log(window);

// window.alert("hello world");

const car = {
  name: "first",
  model: "500",
  color: "white",
  print: function () {
    console.log(this.name, this.model, this.color);
    console.log(this.name + this.model + this.color);
    console.log(this.name + " " + this.model + " " + this.color);
  }
};
car.name = "kia"; // 데이터 바꾸기
car["color"] = "red"; // 배열 형태로도 가능

console.log(car.name);
console.log(car["color"]);
car.print();

// class

class PersonClass {
  //프로퍼티 설정
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  //메소드 설정
  print() {
    console.log(this.name, this.year);
  }
}

let tom = new PersonClass("Tom", "10");
let jane = new PersonClass("Jane", "10");

console.log(tom.name + tom.year);
console.log(jane.name + jane.year);
tom.print();
jane.print();
