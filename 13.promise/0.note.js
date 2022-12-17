// JavaScript Runtime Environment 이라면
// JavaScript Engine이 포함되어 있음.
// Source Code를 JavaScript Engine이 번역해서 실행하는것
// Memory Heap : 객체 생성하면 여기에 저장됨
// Call Stack : 함수 실행순서를 기억한다.
// ㄴ하나의 싱글 컨텍스트 스택 즉, 싱글 쓰레드(Single Thread)
// ㄴ한번에 하나의 일만 할 수 있음
// ㄴ자바스크립트는 기본적으로 동기적으로 진행

// 1. callstack.js 예시 참고

// 그렇다면 javascript에서는 동기적으로 실행 할 수 밖에 없는가? X
// JavaScript Runtime Environment에서 제공하는 다양한 api가 있음
// browser : Web APIs (DOM API, setTimeout, setInterval, fetch, event listener)
// node : ...

// api는 대부분 병렬적으로 수행할 수 있는 유용한 것들인데 
// api를 사용해서 callback함수를 걸어놓으면 
// 내부적으로 비동기적인 일이 수행 되고나서 callback 함수는 Track Queue에 저장되는데
// Event Loop가 Call Stack과 Tack Queue를 감시하다가
// Call Stack이 한가할 때 callback 함수를 Call Stack에 넣어서 실행함.
// (Call Stack은 한번에 하나의 일 밖에 수행하지 못하기 때문)

// 2. timeout.js 예시 참고
// 3. timeout-quiz.js 참고

// callback을 좀 더 깔끔하게 작성할 수 있는 promise
// 비동기 적인 일이 수행되고 끝나면 니가 원하는 일을 실행해줄게 약속~
// then catch finally
// promise 상태
// ㄴpending : 이제 막 promise가 만들어져서 일이 끝나지 않은 상태
// ㄴfulfilled : 비동기적인 코드가 성공적으로 수행된 상태
// ㄴrejected : 에러가 발생한 상태

// 4. promise.js 예시 참고
// 5. promise-egg.js 참고
// 6. promise-all.js 참고

// 7. async.js 참고
// 8. async-quiz.js 참고

// 9. json.js

// fetch : 네트워크로부터 특정한 리소스에 대해 받아올 수 있다.
// fetch 는 promise를 return 하는데 
// 이 promise가 response를 return 한다.
// response 안에는 body .. 등 네트워크 요청에 대한 다양한 정보 있음

