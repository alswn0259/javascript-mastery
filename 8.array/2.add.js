const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// const fruits = ['🍌', '🍎', '🍇', '🍑'];
// 추가, 삭제 - 좋지 않은 방식 💩
// 1. 인덱스를 이용해서 데이터 추가 하지 않기
// 이미 있는 데이터에 넣을 수도 있고 비어 있는 공간이 있을 수 있다.
fruits[6] = '🍓'; 
console.log(fruits);
// 2. 삭제 되고 빈 공간이 남아 있음.
delete fruits[1];
console.log(fruits);
