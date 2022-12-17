function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기
getBanana()
  .then(banana => 
    getApple()
      .then((apple) => [banana, apple])
  )
  .then(console.log);

// 위에꺼 총 4초 걸림. 병렬적으로 실행해보자.
// Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()]) //
  .then(fruits => console.log('all', fruits));

// Promise.race 주어진 Promise 중에 제일 빨리 수행되는 것이 이김!
Promise.race([getBanana(), getApple()])
  .then(fruit => console.log('race', fruit));

Promise.all([getBanana(), getApple(), getOrange()])
  .then(fruits => console.log('all-error', fruits))
  .catch(console.log)

// error 발생한거랑 성공한거랑 정보 받아오고 싶다면
Promise.allSettled([getBanana(), getApple(), getOrange()])
  .then(fruits => console.log('all-settiled', fruits))
  .catch(console.log)