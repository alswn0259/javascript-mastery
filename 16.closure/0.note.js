// 클로저 Closures : 폐쇄 닫히는 느낌
// 함수와 렉시컬 환경의 조합
// 내부함수에서 외부 함수로 접근할 수 있는 권한을 준다.
function outer() {
    const x=0;
    function inner() {
        x;
    }
    return inner;
}

 const inner = outer();
 inner();
 