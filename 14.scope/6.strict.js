// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임
'use strict';

var x = 1;
// delete x; // 변수 삭제 안됨

function add(x) {
  var a = 2;
  // b = a + x; // 선언되지 않은 변수 사용 못함
  // console.log(this); // 함수 안에서 this 못씀
}
add(1);

const array = [1, 2, 3];
for (num of array) { // const 생략하면 var 처럼 사용됨. 엄격모드에서는 안됨.
  console.log(num);
}

// 'use strict';
// // 엄격 모드 strict mode
// // 리액트와 같은 프레임워트 사용시 기본적으로 엄격 모드임
// // var x = 1;
// // delete x;

// function add(x) {
//   var a = 2;
//   var b = a + x;
//   console.log(this);
// }
// add(1);

// const array = [1, 2, 3];
// for (const num of array) {
//   console.log(num);
// }
