// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 꽁꽁 얼림!) 중첩된거까지는 꽁꽁 얼려주지 않음
const ellie = { name: '엘리' };
const dog = { name: '와우', emojii: '🐶', owner: ellie }
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
ellie.name = '엘리얌';
console.log(dog);

// 밀봉! Object.seal 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
const cat = {...dog};
// Object.assign(cat, dog); // cat에 dog의 모든 프로퍼티 복사해옴
console.log(cat);
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions 추가 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
