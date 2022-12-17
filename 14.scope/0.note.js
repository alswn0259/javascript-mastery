// 스코프 Scope
// 변수를 참조할 수 있는 유효한 범위
// 식별자(변수, 함수, 클래스 이름)가 유효한 범위
// 선언된 위치에 따라 유효 범위가 결정됨.

// 이름 충돌 방지, 메모리 절약
// {
// 블럭 안의 변수는 블럭 안에서만 유효
// }

// 1. scope.js 예제 참고
// 2. scope-quiz.js 예제 참고

// 프로그램 C 개발자가 직접 메모리 관리를 해야함.
// C#, go, java, js 메모리 직접 관리 안해도됨.
// Garbage Collertor가 있기 때문
// 어떤경우에 메모리가 그대로 남아있는지
// 어떤경우에 Garbage Collertor에 의해 메모리가 정리되는지 알아야 한다.
let apple = {
    name: 'apple'
}
let orange = apple; 
orange = null;
apple = null;
// => 1) { name: 'apple' }이 메모리에 할당되고 apple과 orange가 그 주소를 참조하고 있음.
// 2) orange와 apple은 같은 메모리 주소를 가지고 있다
// 3) orange와 apple을 null로 비워서 아무것도 참조하지 않게함.
// 4) 그 누구도 object를 참조 하고 있지 않다면 Garbage Collertor가 메모리에서 치움.

// Garbage Collection은 자바스크립트 엔진에서 제공하는 백그라운드 프로세스이다.
// 어플리케이션이 한가할 때 어플리케이션에서 사용하는 메모리를 감시해서 아무도 사용하지 않는 것 치움
// 이것도 CPU가 사용되기 때문에 너무 자주 빈번히 일어나면 안된다.
// 메모리를 필요한 만큼 쓰는 것이 중요

// 3. gc.js 참고

// 실행컨텍스트 Execution Context
// 코드의 실행순서와 스코프를 기억함.
// 자바스크립트 엔진에는 단 하나의 call stack만 있기 때문에 한버에 하나의 일만 수행할 수 있다.
const a = 1; // 전역스코프
{
    const a = 2; // 블럭스코프
    {
        const a = 3; // 블럭스코프
    }
}
// 각각의 블록은 렉시컬환경이라는 내부 오브젝트를 가지고 있다.
// 렉시컬 환경 - 환경 레코드 : 어떤 데이터가 있는지
//            - 외부 환경 참조 : 부모가 누구인지

// 호이스팅 Hoisting(끌어올리다)
// 자바스크립트 엔진(번역기, Interpreter)이 코드를 실행하기 전,
// 변수, 함수, 클래스의 선언문을 끌어 올리는 것을 말함.
// 자바스크립트 엔진이 코드 실행전 코드를 쭉보면서 변수, 함수, 클래스의 선언!!만 끌어올림
// 변수 Variables : 값을 저장하는 공간
//                : 자료를 저장할 수 있는 이름이 주어진 기억 장소
// let, const 

// 4. hoisting.js 예제 참고