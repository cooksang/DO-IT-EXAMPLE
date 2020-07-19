2-1 템플릿 문자열
string1 + ' ' + string2;
`${string1} ${string2}`;

product = { name: '도서', price: '4200원'};
'제품 ' + product.name + '의 가격은' + product.price + '입니다';
`제품 ${product.name} 의 가격은 ${product.price}입니다`;

'문자열1\n문자열2';
`문자열1 문자열2`;

var value1 = 1;
var value2 = 2;
var boolValue = false;
'곱셈값은 ' + (value1 _ value2) + '입니다.';
`곱셈값은 \${value1 _ value2}입니다.`;

'불리언값은 ' + (boolValue ? '참' : '거짓') + '입니다.';
`불리언값은 ${boolValue ? '참' : '거짓'}입니다.`;

var cart = {name: '도서', price: 1500};
var getTotal = function(cart) {
return cart.price + '원';
}
var myCart = '장바구니에 ' + cart.name + '가 있습니다. 총 금액은 ' + getTotal(cart) + '입니다.';
var getTotal = function(cart) {
return `${cart.price}원`;
}
var myCart = `장바구니에 ${cart.name}가 있습니다. 총 금액은 ${getTotal(cart)}입니다.`;

정리 : es6에서는 `으로 문자열을 감싸고 \${}로 변수를 문자열 안에서 사용 가능

2-2 전개 연산자
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array2[1]];
var combined = array1.concat(array2);
var combined = [].concat(array1, array2);

var combined = [...array1, ...array2];
// combined = ['one', 'two', 'three', 'four'];

var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';

var [first, second, three = 'empty', ...others] = array1;
// first = 'one', second = 'two', three = 'empty', others = []

function func() {
var args = Array.prototype.slice.call(this, arguments);
var first = args[0];
var others = args.slice(1, args.length);
}

function func(...args) {
var [first, ...others] = args;
}

var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
one: objectOne.one,
two: objectOne.two,
three: objectTwo.three,
four: objectTwo.four,
};
var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}
var combined = Object.assign({}, objectTwo, objectOne);
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
var others = Object.assign({}, combined);
delete others.other;

// ES6 예제
var combined = {
...objectOne,
...objectTwo,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}
var combined = {
...objectTwo,
...objectOne,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
var { other, ...others } = combined;
// others = { one: 1, two: 2, three: 3, four: 4}

정리 : es6에서는 ...배열, ...객체로 펼쳐서 합치거나 추출 가능

2-3 가변 변수와 불변 변수
let num =1;
num = num \* 3;
let str = '문자';
str = '다른 문자';
let arr = [];
arr = [1, 2, 3];
let obj = {};
obj = { name: '새 객체' };

const num = 1;
num =3; // 자료형 오류
const str = '문자';
str = '새 문자'; // 자료형 오류
const arr = [];
arr = [1, 2, 3]; // 자료형 오류
const obj = {};
obj = { name: '내 이름' }; // 자료형 오류

const arr2 = [];
arr2.push(1); // arr2 = [1]
arr2.splice(0, 0, 0); // arr2 = [0, 1]
arr2.pop(); // arr2 = [1]
const obj2 = {};
obj2['name'] = '내이름'; // obj2 = { name: '내이름' }
Object.assign(obj2, { name: '새이름' }); // obj2 ={ name: '새이름' }
delete obj2.name; // obj2 = {}

const num1 = 1;
const num2 = num1 \* 3; // num2 = 3
const str1 = '문자';
const str2 = str1 + '추가'; // str2 = '문자추가'
const arr3 = [];
const arr4 = arr3.concat(1); // arr4 = [1]
const arr5 = [...arr4, 2, 3]; // arr5 = [1, 2, 3]
const arr6 = arr5.slice(0, 1); // arr6 = [1], arr5 = [1, 2, 3]
const [first, ...arr7] = arr5; // arr7 = [2, 3], first = 1
const obj3 = { name: '내이름', age: 20 };
const objValue = { name: '새이름', age: obj3.age };
const obj4 = { ...obj3, name: '새이름' }; // obj4 = { name: '새이름', age: 20}
const { name, ...obj5 } = obj4; // obj5 = { age: 20 }

정리 : 불변(const) 변수로 정의된 배열, 객체의 내장 함수로 수정 가능, 암묵적으로 금지

2-4 클래스
function Shape(x, y) {
this.name = 'Shape';
this.move(x, y);
}
// static 타입 선언 예제
Shape.create = function(x, y) {
return new Shape(x, y);
};
Shape.prototype.move = function(x, y) {
this.x = x;
this.y = y;
};
Shape.prototype.area = function() {
return 0;
};

// 혹은
Shape.prototype = {
move: function(x, y) {
this.x = x;
this.y = y;
},
area: function() {
return 0;
},
};

var s = new Shape(0, 0);
var s2 = Shape.create(0, 0);
s.area(); // 0

function Circle(x, y, radius) {
Shape.call(this, x, y);
this.name = 'Circle';
this.radius = radius;
}
Object.assign(Circle.prototype, Shape.prototype, {
area: function() {
return this.radius \* this.radius;
},
});

var c = new Circle(0, 0, 10);
c.area(); // 100

// ES6 예제
class Shape {
static create(x, y) {
return new Shape(x, y);
}
name = 'Shape';

constructor(x, y) {
this.move(x, y);
}
move(x, y) {
this.x = x;
this.y = y;
}
area() {
return 0;
}
}

var s = new Shape(0, 0);
var s1 = Shape.create(0, 0);
s.area(); // 0

class Circle extends Shape {
constructor(x, y, radius) {
super(x, y);
this.radius = radius;
}
area() {
if (this.radius === 0) return super.area();
return this.radius \* this.radius;
}
}

var c = new Circle(0, 0, 10);
c.area(); // 100

정리 : es5에서 클래스 사용하기 힘듬, es6 기준이 편리
생성자, 클래스 변수, 클래스 함수 정의에 var , let, const, ...을 사용하지 않음
다중 상속과 인터페이스 지원하지 않음

2-5 화살표 함수

function add(first, second) {
return first + second;
}

// typeof add === 'function'
var add = function(first, second) {
return first + second;
}
// tyypeof add === 'function'
var add = (first, second) => {
return first + second;
}
var add = (first, second) => first + second;
var addAndMultiple = (first, second) => ({ add: first + second, multiply: first \* second });

function addNumber(num) {
return function (value) {
return num + value;
}
}
var addNumber = num => value => num + value;

class MyClass {
value = 10;
constructor() {
var addThis2 = function(first, second) {
return this.value + first + second;
}.bind(this);
var addThis3 = (first, second) => this.value + first + second;
}
}

정리 : 화살표 함수는 익명 함수 표현과 유사, this범위로 생기는 일반 함수의 오류를 회피 가능

2-6 객체 확장 표현식과 구조 분해 할당

var x = 0;
var y = 0;

var obj = { x: x, y: y};

var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value';

var obj2 = {
methodA: function() { console.log('A'); },
methodB: function() { return 0; },
};

// ES6의 예
var x = 0;
var y = 0;
var obj = { x, y };

var randomKeyString = 'other';
var combined = {
['one' + randomKeyString]: 'some value',
};

var obj2 = {
x,
methodA() { console.log('A'); },
methodB() { return 0; },
};

var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1;
var temp = item2;
item2= item1;
item1 = temp;
var obj = {
key1: 'one',
key2: 'two',
};
var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value';
var newKey1 = key1;

// ES6 예제
var list = [0, 1];
var [
item1,
item2,
item3 = -1,
] = list;
[item2, item1] = [item1, item2];

var obj = {
key1: 'one',
key2: 'two',
};
var {
key1: newKey1,
key2,
key3 = 'default key3 value',
} = obj;

var [item1, ...otherItems] = [0, 1, 2];
var { key1, ...others } = { key1: 'one', key2: 'two' };
// otherItems = [1, 2]
// others = { key2: 'two' }

정리 : 전개 연산자와 같이 json 데이터 변환 등에 유용하게 사용 가능

2-7 라이브러리 의존성 관리

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

import MyModule from './MyModule';
import { ModuleName } from './MyModule';
import { ModuleName as RenamedModuleName } from './MyModule';

function Func() {
MyModule();
}
export const CONST_VALUE = 0;
export default new Func();

2-8 배열 함수
const qs = 'banana=10&apple=20&orange=30';

function parse(qs) {
var queryString = qs.substr(1); // querystring = 'banana=10&apple=20&orange=30'
var chunks = queryString.split('&'); // chunks = ['banana=10', 'apple=20', 'orange=30']
var result = {};
for(var i = 0; i < chunks.length; i++) {
var parts = chunks[i].split('=');
var key = parts[0];
var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
result[key] = value;
}
return result;
}

const params = parse(qs); // params = { banana: 10, apple: 10, orage: 30};

function parse(qs) {
const queryString = qs.substr(1); // querystring = 'banana=10&apple=20&orange=30'
const chunks = queryString.split('&'); // chunks = ['banana=10', 'apple=20', 'orange=30']
let result = {};
chunks.forEach((chunk) => {
const [ key, value ] = chunk.split('='); // key = 'banana', value = '10'
result[key] = value; // result = { banana: 10 }
});
return result;
}

function parse(qs) {
const queryString = qs.substr(1);
const chunks = queryString.split('&');
const result = chunks.map((chunk) => {
const [ key, value ] = chunk.split('='); // key = 'banana', value = '10'
return { key: key, value: value }; // { key: 'banana', value: '10' }
});
return result;
// result = [
// { key: 'banana', value: '10'},
// { key: 'apple', value: '20' },
// { key: 'orange', value: '30'}
// ];
}

function sum(numbers) {
return numbers.reduce((total, num) => total + num, 0);
}
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 55

function parse(qs) {
const queryString = qs.substr(1);
const chunks = queryString.split('&');
return chunks
.map((chunk) => {
const [ key, value ] = chunk.split('='); // key = 'banana', value = '10'
return { key, value }; // { key: 'banana', value: '10' }
})
.reduce((result, item) => ({
...result,
[item.key]: item.value,
}), {});
}

function parse(qs) {
const queryString = qs.substr(1);
const chunks = queryString.split('&');

// return chunks
// .map((chunk) => chunk.split('='))
// .map(([key, value]) =>({ key, value }))
// .reduce((result, [ key, value ]) => ({
// ...result,
// [key]: value,
// }), {});
return chunks
.map((chunk) => chunk.split('='))
.reduce((result, [ key, value ]) => ({
...result,
[key]: value,
}), {});
}

정리 : forEach - 배열 갯수 만큼 돔, map - 배열 갯수 만큼 돌고 배열 반환, reduce - 배열 갯수 만큼 돌고 객체(단일값) 반환

2-9 비동기 함수
// ES5의 예제
function work1(onDone) {
setTimeout(() => onDone('작업1 완료!'), 100);
}
function work2(onDone) {
setTimeout(() => onDone('작업1 완료!'), 200);
}
function work3(onDone) {
setTimeout(() => onDone('작업3 완료!'), 300);
}
function urgentWork() {
console.log('긴급 작업');
}
// 실제 비동기 함수를 사용하는 예
work1(function(msg1) {
console.log('done after 100ms:' + msg1);
work2(function(msg2) {
console.log('done after 300ms:' + msg2);
work3(function(msg3) {
console.log('done after 600ms:' + msg3);
});
});
});
urgentWork();

// ES6의 예제
const work1 = () =>
new Promise(resolve => {
setTimeout(() => resolve('작업1 완료!'), 100);
});
const work2 = () =>
new Promise(resolve => {
setTimeout(() => resolve('작업2 완료!'), 200);
});
const work3 = () =>
new Promise(resolve => {
setTimeout(() => resolve('작업3 완료!'), 300);
});
function urgentWork() {
console.log('긴급 작업');
}

const nextWorkOnDone = msg1 => {
console.log('done after 100ms:' + msg1);
return work2();
};

work1()
.then(nextWorkOnDone)
.then(msg2 => {
console.log('done after 200ms:' + msg2);
return work3();
})
.then(msg3 => {
console.log(`done after 600ms:${msg3}`);
});
urgentWork();
const work1and2 = () =>
work1().then(msg1 => {
console.log('done after 100ms:' + msg1);
return work2();
});

work1and2()
.then(msg2 => {
console.log('done after 200ms:' + msg2);
return work3();
})
.then(msg3 => {
console.log('done after 600ms:' + msg3);
});

class Promise {
constructor(fn) {
function resolve() {
if (typeof this.onDone === 'function') {
this.onDone.apply(null, arguments);
}
if (typeof this.onComplete === 'function') {
this.onComplete();
}
}
function reject() {
if (typeof this.onError === 'function') {
this.onError.apply(null, arguments);
}
if (typeof this.onComplete === 'function') {
this.onComplete();
}
}
fn(resolve.bind(this), reject.bind(this));
}
then(onDone, onError) {
this.onDone = onDone;
this.onError = onError;
return this;
}
catch(onError) {
this.onError = onError;
return this;
}
finally(onComplete) {
this.onComplete = onComplete;
return this;
}
}

// var fn = function (resolve, reject) {};
// p = new Promise(fn);
// p.then(resolver, rejecter).catch(otherRejector).finally(afterResolveorReject);

정리 : promise 객체를 변수에 할당하여 then 구조로 콜백 지옥 해결 가능

2-10 디바운스와 스로틀
export function debounce(func, delay) {
let inDebounce;
return function(...args) {
if (inDebounce) {
clearTimeout(inDebounce);
}
inDebounce = setTimeout(
() => func(...args),
delay);
}
}

const run = debounce(val => console.log(val), 100);
run('a');
run('b');
run(2);
// 100ms 이후
// 2

function throttle(func, delay) {
let lastFunc;
let lastRan;
return function(...args) {
const context = this;
if (!lastRan) {
func.call(context, ...args);
lastRan = Date.now();
} else {
if (lastFunc) clearTimeout(lastFunc);
lastFunc = setTimeout(function() {
if ((Date.now() - lastRun) >= delay) {
func.call(context, ...args);
lastRan = Date.now();
}
}, delay - (Date.now() - lastRan));
}
}
}

var checkPosition = () => {
const offset = 500;
const currentScrollPosition = window.pageYOffset;
const pageBottomPosition = document.body.offsetHeight - window.innerheight - offset;
if (currentScrollPosition >= pageBottomPosition) {
// fetch('/page/next');
console.log('다음 페이지 로딩');
}
}
var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);

정리 : debounce - 키 입력시 멈춘 후 특정 딜레이 지나서 서버 요청
throttle - 키 입력 구간에도 주기적으로 서버 요청
