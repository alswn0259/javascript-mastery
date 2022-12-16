// script에 type="module" 안하면 counter.js와 main.js 서로 접근이 가능해서 오류 유발함.

// import { increase as increase1 } from './counter.js';
// import { increase, getCount } from './counter.js';
// 모든 것을 가지고 올 때 *
import * as counter from './counter.js';

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
