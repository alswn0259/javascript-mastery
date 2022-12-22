// 프로토타입 (Prototype)
// 대략적인것을 나타낸 것
// 다양한 객체들간에 비슷한 클래스를 객체로 만든것처럼 객체 지향 프로그밍을 위해서 프로토 타입 사용
// 객체 지향 프로그래밍을 위해서 Class를 보통 사용하는데 
// 자바스크립트는 prototype 사용 
// Class( 타입스크립트, 자바스크립트, 자바) vs Prototype(자바스크립트)

// 자바스크립트는 프로토타입 기반으로 만들어 졌다
// 예시) 브라우저 콘솔창에서 아래 예시
const obj1 = {}
obj1.toString() 
obj1 // 프로토타입 : 생성자, 기본적인 함수 사용 가능

// 모든 객체 내부에는 숨겨진 [[Prototype]]을 가지고 있다.
// 이는 외부에서 직접 접근이 불가능하고
// __proto__
// Object.getPrototypeOf()
// Object.setPrototypeOf()
// 생성자 함수에서는 prototype으로 접근 가능

const obj2 = {}
obj1.__proto__ === obj2.__proto__ // true
// 자바스크립트 객체는 동일한 프로토타입 객체를 상속하는 것을 알 수 있다.

const array = [];
array
// 배열 array -> Array 프로토 타입 상속 -> Object 프로토타입 상속
// 자바스크립트에서 set, map 같은것도 결국 Object 프로토타입을 상속함 
// 객체간 상속의 연결 고리는 프로토타입 체인으로 연결 되어 있음. 결국 Object 프로토타입을 상속함 

// 1. property.js 참고
// 2. freeze.js 참고

const dog1 = { name: '뭉치', emoji: '🐶' };
const dog2 = { name: '코코', emoji: '🐩' };
// 객체들이 여러번 반복되는 경우 편하게 만들 수 있는 방법이 생성자, 클래스
// 클래스가 자바스크립트 내부적으로는 prototype으로 동작
// prototype으로 만들어서 쓰는 원시적인 방법은 실제로는 잘 쓰지 않음

// 3. prototype.js 참고
// 4. inheritance.js 참고
// 5. mixin.js 참고
