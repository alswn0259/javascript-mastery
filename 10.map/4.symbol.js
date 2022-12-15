// Symbol 심벌 : 데이터 타입 중 원시 데이터
// 유일한 키를 생성할 수 있음 🔑

const map = new Map();
// Symbol 안했을때 
// 다른 변수여도 값이 같으면 같은 key로 인식함
// const key1 = 'key';
// const key2 = 'key';
// Symbol 사용
const key1 = Symbol('key');
const key2 = Symbol('key');
map.set(key1, 'Hello');
console.log(map.get(key2)); 
console.log(key1 === key2);

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리(Global Symbol Registry)에 등록해서 재사용하게됨.
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

// 심볼이 가지고 있는 문자열 알고 싶을 때
console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(key1)); // Global Registry에 없어서 못 가져옴
//일반 심볼은 문자열에 대한 정보 숨겨져있음
//registry 에 등록된 거만 문자열에 대한 정보 받아올 수 있음

// 심벌은 map 에서 유용하게 사용가능
// 내 클래스 혹은 모듈 내에서 map에 있는 값을 읽어와야 한다면 
// 보안을 높이고 싶을 때 사용
// unique 함을 보장

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 }; // [Symbol('key')] 외부에서 접근 못함
console.log(obj);
console.log(obj[k1]);
console.log(obj[Symbol('key')]); // obj의 심벌과 console의 심벌 전혀 다른 key 여서 접근 못함
