// Bubbling up, Propagating π§Ό
// error κ·Όμ ν κ³³μμ μ‘μμ§ λ§μ§λ§μμ μ‘μμ§ μ νν  μ μμ
// λ΄κ° errorλ₯Ό μ μ²λ¦¬ν  μ μλ κ³³μμ νΉμ μ ν©ν κ³³μμ error μ²λ¦¬νλ©΄ λ¨
function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('μκ°ν΄λ³΄λκΉ μ΄ μλ¬λ λ΄κ° νΈλ€λ§ ν  μ μμ κ² κ°κ΅°!');
    console.log('λ€μ μλ¬λ₯Ό λμ ΈμΌκ² μ΄!');
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
