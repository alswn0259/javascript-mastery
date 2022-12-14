// 정리!!
// iterable 객체 : 반복 가능한 객체 ex) array, map, set...
// iterable로 평가된 값은 for...of문, 전개 문법(Spread syntax), 구조 분해 할당(Destructuring)에 사용
// iterable protocol : 어떠한 객체든 특정 조건을 만족하면 iterable 또는 iterator로 평가 받을 수 있도록 하는 규약.

// iterable이 되기 위해서는 다음 사항을 준수해야 한다.
// 1. 객체 내에 [Symbol.iterator]() 메서드가 존재해야 한다.
// 2. [Symbol.iterator] 메서드는 Iterator 객체를 반환해야 한다.

// iterator는 iterable 객체에서 반복을 실행하는 반복기를 뜻한다.
// iterator가 되기 위해서는 다음 사항을 준수해야 한다.
// 1. 객체 내에 next 메서드가 존재해야 한다.
// 2. next 메서드는 IteratorResult 객체를 반환해야 한다.
// 3. IteratorResult 객체는 done: boolean과 value: any 프로퍼티를 가진다.
// 4. 이전 next 메서드 호출의 결과로 done 값이 true를 리턴했다면, 
// 이후 호출에 대한 done 값도 true 여야 한다.
const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}
for (const item of array.values()) {
  console.log(item);
}
for (const item of array.keys()) {
  console.log(item);
}
for (const item of array.entries()) {
  console.log(item);
}
// Object는 Iterator를 반환하지 않기 때문에 error!
// for..in을 사용하여 key 출력!
const obj = { 0: 1, 1: 2};
// for (const item of obj) {
//   console.log(item);
// }
for (const item in obj) { // key를 출력
  console.log(item);
}

const iterator = array.values();
while(true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}

for (let item of array) {
  console.log(item);
}