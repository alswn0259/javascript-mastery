// Map : key와 값으로 이루어진 자료구조
// 순서 상관 X, key를 기준으로 자료 찾음
// key는 유일하다. 값은 중복가능
// javascript의 object와 유사.

const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌']
]);
console.log(map);

// 사이즈 확인
console.log(map.size);

// 존재하는지 확인
console.log(map.has('key1'));
console.log(map.has('key6'));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key6')); // 존재x : undefined

// 추가
map.set('key3', '🥝');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부삭제
map.clear();
console.log(map);

// 오브젝트와의 큰 차이점??
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는우유'};
const obj = {
  [key]: milk,
}
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
// 사용할 수 있는 함수 즉, interface 가 다름
// 값을 얻는 방식이 다름
console.log(obj[key]);
console.log(map2[key]); // undefined
console.log(map2.get(key));


// const map = new Map([
//   ['key1', '🍎'],
//   ['key2', '🍌'],
// ]);
// console.log(map);

// // 사이즈 확인
// console.log(map.size);

// // 존재하는지 확인
// console.log(map.has('key1'));
// console.log(map.has('key6'));

// // 순회
// map.forEach((value, key) => console.log(key, value));
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// // 찾기
// console.log(map.get('key1'));
// console.log(map.get('key2'));
// console.log(map.get('key4'));

// // 추가
// map.set('key3', '🥝');
// console.log(map);

// // 삭제
// map.delete('key3');
// console.log(map);

// // 전부삭제
// map.clear();
// console.log(map);

// // 오브젝트와의 큰 차이점??
// const key = { name: 'milk', price: 10 };
// const milk = { name: 'milk', price: 10, description: '맛있는우유' };
// const obj = {
//   [key]: milk,
// };
// console.log(obj);
// const map2 = new Map([[key, milk]]);
// console.log(map2);
// console.log(obj[key]);
// console.log(map2[key]);
// console.log(map2.get(key));
