// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'Ellie' }; 

if (obj1 || obj2) { // 앞의 값만 검사하고 true로 평가됨
  console.log('둘다 true!');
}

// 조건문 밖에서 쓰면 평가가 단축됨
let result = obj1 && obj2;
console.log(result); // 오브젝트가 출력됨.

result = obj1 || obj2;
console.log(result);

// 활용예
// 조건이 truthy 일때 && 무언가를 해야 할 경우
// 조건이 falshy 일때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error("주인이 없어");
  }
  animal.owner = '바뀐주인!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error("주인이 있어");
  }
  animal.owner = '새로운주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// 단축평가를 사용하지 않을 경우 코드가 길어짐

// null 또는 undefined인 경우를 확인할 때
let item; // = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본값을 설정
// default parameter로 설정되는 경우 :  전달하지 않거나, undefined 설정
// || 값이 falshy한 경우 설정(할당) 되는 경우 : 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'Hello';
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);