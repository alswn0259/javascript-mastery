const fruits = ['π', 'π', 'π', 'π'];

// λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// const fruits = ['π', 'π', 'π', 'π'];
// μΆκ°, μ­μ  - μ’μ§ μμ λ°©μ π©
// 1. μΈλ±μ€λ₯Ό μ΄μ©ν΄μ λ°μ΄ν° μΆκ° νμ§ μκΈ°
// μ΄λ―Έ μλ λ°μ΄ν°μ λ£μ μλ μκ³  λΉμ΄ μλ κ³΅κ°μ΄ μμ μ μλ€.
fruits[6] = 'π'; 
console.log(fruits);
// 2. μ­μ  λκ³  λΉ κ³΅κ°μ΄ λ¨μ μμ.
delete fruits[1];
console.log(fruits);
