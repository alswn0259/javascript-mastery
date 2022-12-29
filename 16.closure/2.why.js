// 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// 캡슐화와 정보은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!
function makeCounter() {
  let count = 0; // 은닉하고자 하는 데이터 상태를 감추고 데이터를 조작하게 만듦
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

// MDN 예제
var counter1 = (function() {
  // 은닉
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  // 사용가능
  return {
    increase: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter1.value()); 


// 위와 같이 이제는 클로져를 사용할 필요가 없고 Class를 사용하면 된다.
class Counter {
  #count = 0; // 내부적으로 사용
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();
