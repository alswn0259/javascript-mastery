function fetchEgg(chicken) {
 // Promise의 static 함수(resolve, reject 등..)로 바로 사용할 수 있음
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  //return Promise.resolve(`🪴 => 🐓`);
}

// error가 발생했을 때 적절한 처리를 어디서 하느냐에 따라서
// channing 안에서도 적절한 처리 가능해서 성공적으로 진행가능
getChicken()
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
