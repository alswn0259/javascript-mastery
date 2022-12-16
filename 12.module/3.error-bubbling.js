// Bubbling up, Propagating 🧼
// error 근접한 곳에서 잡을지 마지막에서 잡을지 선택할 수 있음
// 내가 error를 잘 처리할 수 있는 곳에서 혹은 적합한 곳에서 error 처리하면 됨
function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('생각해보니깐 이 에러는 내가 핸들링 할 수 없을 것 같군!');
    console.log('다시 에러를 던져야겠어!');
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched!');
}
console.log('done!');
