// 오브젝트는 단 하나의 prototype을 가리킬 수 있다 (부모는 단 하나!)
// 하지만! 여러개의 함수들을 상속하고 싶다!
// Mixin! 여러가지 섞을 때 사용 // 다중 상속 가능
const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
const dog = new Dog('멍멍');
console.log(dog);
dog.play();
dog.sleep();

class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

// Tiger는 클래스 이지만 내부적으로는 프로토타입으로 구현되어 있기 때문에 다음과 같이 구현 가능
Object.assign(Tiger.prototype, play, sleep);
const tiger = new Tiger('어흥!');
tiger.play();
tiger.sleep();
