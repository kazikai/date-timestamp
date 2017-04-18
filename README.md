# date-timestamp 0.1.0

timestamp를 자동으로 반환해주는 Node.js 라이브러리 입니다.

## Installation

npm install date-timestamp

## Manual

const timestamp = require('timestamp');
const time0 = timestamp();
const time1 = timestemp(new Date(), 'yyyy-mm-dd');

console.log(time0);
console.log(time1);

