// count 변수는 외부에 노출하지 않고
// 함수는 외부에 노출하고 싶을 때
// 하나만 할때 'export default' 하고 main.js에서 import increase from './counter.js';
// 여러개 할때 'export'하고 main.js에서 import { increase as increase1 } from './counter.js';
// 'as' 내가 사용하고 싶은 이름 적을 때 사용

// 변수도 export 할 수 있지만 
// 가급적 캡슐화를 사용해서 getter와 setter에 하는 것이 좋음

let count = 0;
export function increase() {
  count++;
  console.log(count);
}
export function getCount() {
  return count;
}
