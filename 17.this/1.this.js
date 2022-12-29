/**
 * 글로벌 컨텍스트의 this
 *  - 브라우저:
 *  - 노드: 모듈
 */

// 노드에서 This란?
console.log(this); // 텅 빈 객체

// this는 모듈을 가르킴
// 모듈을 exports 하면 그것을 가르킨다.
const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis); // global 객체 가르킴

// globalThis 생략가능
// globalThis.setTimeout()
// setTimeout()

// 브라우저에서 This란? (console에서 확인)
// this  -> Window
// this.setTimeout
// setTimeout -> this 생략가능

console.clear();

/**
 * 함수 내부에서의 this
 * 엄격 모드에서는 undefined(함수 스코프 내부에 this 정보 없기 때문)
 * 느슨한 모드에서는 globalThis
 * 브라우저에서는 Window
 */
function fun() {
  console.log(this);
}
fun();

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */
function Cat(name) {
  this.name = name; // cat1에서 엄밀히 말하면 cat1.name 임.
  this.printName = function () {
    console.log(this.name);
  }
}
const cat1 = new Cat('냐옹'); 
const cat2 = new Cat('미야옹');