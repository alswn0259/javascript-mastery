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
// 내부적으로 비동기적인 일이 수행 되고나서 callback 함수는 Tack Queue에 저장되는데
// Event Loop가 Call Stack과 Tack Queue를 감시하다가
// Call Stack이 한가할 때 callback 함수를 Call Stack에 넣어서 실행함.
// (Call Stack은 한번에 하나의 일 밖에 수행하지 못하기 때문)

// 2. timeout.js 예시 참고
