// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print() {
  console.log('Hello');
}

// 변수(let, const)와 클래스는 선언만(변수 이름이 있다는 것만) 호이스팅이 되고,
// 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생
// console.log(hi);
let hi = 'hi';
let func1 = function () {};

// const cat = new Cat();
class Cat {}

let x = 1;
{ // 블럭 내부에 x라는 변수 있다는거 호이스팅 됬기 때문에 초기화 안됬다고 에러남.
  console.log(x);
  let x = 2;
}

